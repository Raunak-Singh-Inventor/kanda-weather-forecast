import { useEffect, useState } from "react";
import raw_forecasts from "../src/data/forecasts.txt";
import { Application } from "react-rainbow-components";
import MainBox from "./components/MainBox/MainBox";
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
            forecast_dict["Chance of rain"] = forecasts_arr[j + 7].substr(
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

  if (isLoaded) {
    return (
      <Application theme={theme}>
        <h1 className="title">Kanda Weather Forecast</h1>
        <MainBox forecasts={forecasts} />
      </Application>
    );
  } else if (!isLoaded) {
    return <h1>Loading</h1>;
  }
}

export default App;
