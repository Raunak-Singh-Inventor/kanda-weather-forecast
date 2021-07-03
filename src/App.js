import { useEffect, useState } from "react";
import raw_forecasts from "../src/data/forecasts.txt";
import Calendar from "react-calendar";
import "./CustomCalender.css";
import "./App.css";

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
      <div className="App">
        <header className="App-header">
          <h1 className="title">Kanda Weather Forecast</h1>
          <Calendar
            onChange={(date) => {
              let stringDate = String(date);
              console.log(stringDate);
              for (var i = 0; i < forecasts.length; i++) {
                if (
                  stringDate.includes(
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
                  ) === true
                ) {
                  console.log("Bingo");
                } else {
                  console.log("No record available");
                }
              }
            }}
          />
        </header>
      </div>
    );
  } else if (!isLoaded) {
    return <h1>Loading</h1>;
  }
}

export default App;
