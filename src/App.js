import { useEffect, useState } from "react";
import raw_forecasts from "../src/data/forecasts.txt";
import { Application, CheckboxToggle, Spinner } from "react-rainbow-components";
import { LocationDD } from "./components/LocationDD";
import { WeatherDatePicker } from "./components/WeatherDatePicker";
import TempCondHumidCard from "./components/TempCondHumidCard/TempCondHumidCard";
import FloodRiskCard from "./components/FloodRiskCard/FloodRiskCard";
import AirQualityCard from "./components/AirQualityCard/AirQualityCard";
import GoogleTranslate from "./components/GoogleTranslate";
import dayBackground from "./images/dayBackground.jpg";
import nightBackground from "./images/nightBackground.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const theme = {
  rainbow: {
    palette: {
      brand: "rgba(197, 21, 234, 1)",
    },
  },
};

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [date, setDate] = useState(new Date());
  const [locationState, setLocationState] = useState("?");
  const [userForecast, setUserForecast] = useState({});
  const [isForecastPresent, setIsForecastPresent] = useState(false);
  const [uyoNGsmData, setUyoNGsmData] = useState({});
  const [accraGHsmData, setAccraGHsmData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bg, setBg] = useState("");

  const getData = () => {
    // fetch the forecasts/hindcasts from the txt and convert the data into a dict object
    fetch(raw_forecasts)
      .then((r) => r.text())
      .then((forecasts_text) => {
        let forecasts_arr = forecasts_text.split("\n");
        forecasts_arr.unshift("");
        let forecast_list = [];
        let forecast_dict = {};
        for (var j = 0; j < forecasts_arr.length; j++) {
          if (forecasts_arr[j] === "") {
            forecast_dict["Location"] = forecasts_arr[j + 1].substr(
              0,
              forecasts_arr[j + 1].indexOf(":")
            );
            forecast_dict["Date"] = forecasts_arr[j + 1].substr(
              forecasts_arr[j + 1].indexOf(":") + 2
            );
            forecast_dict["Pressure"] = forecasts_arr[j + 2].substr(
              forecasts_arr[j + 2].indexOf(":") + 2
            );
            forecast_dict["Temperature"] = forecasts_arr[j + 3].substr(
              forecasts_arr[j + 3].indexOf(":") + 2
            );
            forecast_dict["Humidity"] = forecasts_arr[j + 4].substr(
              forecasts_arr[j + 4].indexOf(":") + 2
            );
            forecast_dict["Condition"] = forecasts_arr[j + 5].substr(
              forecasts_arr[j + 5].indexOf(":") + 2
            );
            forecast_dict["Wind"] = forecasts_arr[j + 6].substr(
              forecasts_arr[j + 6].indexOf(":") + 2
            );
            forecast_dict["chanceOfRain"] = forecasts_arr[j + 7].substr(
              forecasts_arr[j + 7].indexOf(":") + 2
            );
            forecast_list.push(forecast_dict);
          } else {
            forecast_dict = {};
          }
        }
        setForecasts(forecast_list);
        setisLoaded(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // get the locations from the forecasts dict to display in location dropdown (LocationDD)
    let locations_list = [];
    for (var i = 0; i < forecasts.length; i++) {
      locations_list.push(forecasts[i].Location);
    }
    setLocations(Array.from(new Set(locations_list)));
  }, [forecasts]);

  useEffect(() => {
    // find if date and location picked by user are present in forecasts dict
    for (var i = 0; i < forecasts.length; i++) {
      if (
        String(date).includes(
          String(forecasts[i].Date)
            .replace(",", "")
            .replace("January", "Jan")
            .replace("February", "Feb")
            .replace("March", "Mar")
            .replace("April", "Apr")
            .replace("June", "Jun")
            .replace("July", "Jul")
            .replace("August", "Aug")
            .replace("September", "Sep")
            .replace("October", "Oct")
            .replace("November", "Nov")
            .replace("December", "Dec")
            .replace(" 1 ", " 01 ")
            .replace(" 2 ", " 02 ")
            .replace(" 3 ", " 03 ")
            .replace(" 4 ", " 04 ")
            .replace(" 5 ", " 05 ")
            .replace(" 6 ", " 06 ")
            .replace(" 7 ", " 07 ")
            .replace(" 8 ", " 08 ")
            .replace(" 9 ", " 09 ")
        ) === true &&
        locationState === forecasts[i].Location.replace(",", "")
      ) {
        setUserForecast(forecasts[i]);
        setIsForecastPresent(true);
        return;
      } else {
        setIsForecastPresent(false);
      }
    }
  }, [date, locationState, forecasts]);

  useEffect(() => {
    // Grab the soil moisture data from the dClimate API for the picked date
    var fDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    fDate = fDate
      .replace("-1", "-01")
      .replace("-2", "-02")
      .replace("-3", "-03")
      .replace("-4", "-04")
      .replace("-5", "-05")
      .replace("-6", "-06")
      .replace("-7", "-07")
      .replace("-8", "-08")
      .replace("-9", "-09");

    async function fetchUyoNGsmData() {
      setUyoNGsmData({});
      // the CORS server is needed in development and Github Pages to communicate with the dClimate API
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.6901705_-0.2099204?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true";
      let response = await fetch(proxyurl + url);
      response = await response.json();
      setUyoNGsmData(response.data[fDate + " 00:00:00+00:00"]);
    }
    async function fetchAccraGHsmData() {
      setAccraGHsmData({});
      // the CORS server is needed in development and Github Pages to communicate with the dClimate API
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.0405866_7.9194225?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true";
      let response = await fetch(proxyurl + url);
      response = await response.json();
      setAccraGHsmData(response.data[fDate + " 00:00:00+01:00"]);
    }
    fetchUyoNGsmData();
    fetchAccraGHsmData();
  }, [date]);

  const onLocationChange = (value) => {
    setLocationState(value);
  };

  useEffect(() => {
    // sets the background depending on whether it is dark mode or not
    isDarkMode ? setBg(nightBackground) : setBg(dayBackground);
  }, [isDarkMode]);

  // isLoaded is true if the data from the txt has been put in the forecasts dict
  if (isLoaded) {
    return (
      <div style={{ height: 1000, backgroundImage: `url(${bg})` }}>
        <Application style={{ textAlign: "center" }} theme={theme}>
          <div className="row">
            <div className="col-md-3">
              <GoogleTranslate />
            </div>
            <h1 className="title col-md-6">Kanda Weather Forecast</h1>
            <div className="col-md-3">
              <CheckboxToggle
                value={isDarkMode}
                onChange={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              />
              {isDarkMode ? (
                <h1 style={{ fontSize: 40 }}>????</h1>
              ) : (
                <h1 style={{ fontSize: 40 }}>????</h1>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-2" style={{ marginRight: 5 }}>
              <WeatherDatePicker changed={setDate} />
            </div>
            <div className="col-md-2" style={{ marginLeft: 5 }}>
              <LocationDD
                onLocationChange={onLocationChange}
                locations={locations}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="rainbow-align-content_center rainbow-p-around_medium">
            <TempCondHumidCard
              isForecastPresent={isForecastPresent}
              userForecast={userForecast}
            />
            <div className="rainbow-p-around_medium">
              <FloodRiskCard
                uyoNGsmData={String(uyoNGsmData)}
                accraGHsmData={String(accraGHsmData)}
                location={locationState}
              />
              <AirQualityCard
                isForecastPresent={isForecastPresent}
                userForecast={userForecast}
              />
            </div>
          </div>
          {isDarkMode ? (
            <>
              <h4 style={{ color: "white" }}>
                Made with ?????? in React by Raunak Singh
              </h4>
            </>
          ) : (
            <>
              <h4>Made with ?????? in React by Raunak Singh</h4>
            </>
          )}
        </Application>
      </div>
    );
  } else if (!isLoaded) {
    return <Spinner size="x-large" />;
  }
}

export default App;
