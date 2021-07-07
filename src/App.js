import { useEffect, useState } from "react";
import raw_forecasts from "../src/data/forecasts.txt";
import { Application } from "react-rainbow-components";
import { LocationDD } from "./components/LocationDD";
import { WeatherDatePicker } from "./components/WeatherDatePicker";
import TempCondHumidCard from "./components/TempCondHumidCard/TempCondHumidCard";
import FloodRiskCard from "./components/FloodRiskCard/FloodRiskCard";
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
  const [locationState, setLocationState] = useState("");
  const [userForecast, setUserForecast] = useState({});
  const [isForecastPresent, setIsForecastPresent] = useState(false);
  const [uyoNGsmData, setUyoNGsmData] = useState(46.5);
  const [accraGHsmData, setAccraGHsmData] = useState(0.1);

  const getData = () => {
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
    let locations_list = [];
    for (var i = 0; i < forecasts.length; i++) {
      locations_list.push(forecasts[i].Location);
    }
    setLocations(Array.from(new Set(locations_list)));
  }, [forecasts]);

  useEffect(() => {
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
        locationState.label === forecasts[i].Location
      ) {
        setUserForecast(forecasts[i]);
        setIsForecastPresent(true);
      } else {
        setIsForecastPresent(false);
      }
    }
  }, [date, locationState, forecasts]);

  useEffect(() => {
    var datetime =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " 01:00:00+01:00";
    let datetime_filtered = datetime
      .replace("-1", "-01")
      .replace("-2", "-02")
      .replace("-3", "-03")
      .replace("-4", "-04")
      .replace("-5", "-05")
      .replace("-6", "-06")
      .replace("-7", "-07")
      .replace("-8", "-08")
      .replace("-9", "-09");
    console.log(datetime_filtered);

    async function fetchUyoNGsmData() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.6901705_-0.2099204?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true";
      let response = await fetch(proxyurl + url);
      response = await response.json();
      return response.data[datetime];
    }
    async function fetchAccraGHsmData() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://api.dclimate.net/apiv2/grid-history/era5_volumetric_soil_water_layer_1-hourly/5.0405866_7.9194225?also_return_metadata=false&use_imperial_units=true&also_return_snapped_coordinates=true&convert_to_local_time=true";
      let response = await fetch(proxyurl + url);
      response = await response.json();
      return response.data[datetime];
    }
    // setUyoNGsmData(fetchUyoNGsmData());
    // setAccraGHsmData(fetchAccraGHsmData());
  }, [date,locationState]);

  if (isLoaded) {
    return (
      <Application style={{ textAlign: "center" }} theme={theme}>
        <h1 className="title">Kanda Weather Forecast</h1>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <WeatherDatePicker changed={setDate} />
          <LocationDD changed={setLocationState} locations={locations} />
        </div>
        <div className="rainbow-align-content_center rainbow-p-around_medium">
          <TempCondHumidCard
            isForecastPresent={isForecastPresent}
            userForecast={userForecast}
          />
          <FloodRiskCard
            location={locationState.label}
            uyoNGsmData={uyoNGsmData}
            accraGHsmData={accraGHsmData}
          />
        </div>
      </Application>
    );
  } else if (!isLoaded) {
    return <h1>Loading</h1>;
  }
}

export default App;
