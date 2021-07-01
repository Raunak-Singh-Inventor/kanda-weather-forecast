import raw_forecasts from '../src/data/forecasts.txt'
import './App.css';

function App() {
  fetch(raw_forecasts)
  .then(r => r.text())
  .then(forecasts_text => {
    let forecasts_arr = forecasts_text.split("\n")
    for(var i = 0; i<forecasts_arr.length; i++) {
      if(forecasts_arr[i]==="### BEGIN FORECASTS ###"){
        forecasts_arr.splice(i,1)
      }
      if(forecasts_arr[i]===""){
        forecasts_arr.splice(i,1)
      }
    }
    let forecasts = []
    let forecast_dict = {}
    for(var j = 0; j<forecasts_arr.length; j++) {
      if(forecasts_arr[j]==="") {
        forecast_dict["Location"] = forecasts_arr[j+1].substr(0,forecasts_arr[j+1].indexOf(":"))
        forecast_dict["Date"] = forecasts_arr[j+1].substr(forecasts_arr[j+1].indexOf(":")+2,)
        forecast_dict["Pressure"] = forecasts_arr[j+2].substr(forecasts_arr[j+2].indexOf(":")+2,)
        forecast_dict["Temperature"] = forecasts_arr[j+3].substr(forecasts_arr[j+3].indexOf(":")+2,)
        forecast_dict["Humidity"] = forecasts_arr[j+4].substr(forecasts_arr[j+4].indexOf(":")+2,)
        forecast_dict["Condition"] = forecasts_arr[j+5].substr(forecasts_arr[j+5].indexOf(":")+2,)
        forecast_dict["Wind"] = forecasts_arr[j+6].substr(forecasts_arr[j+6].indexOf(":")+2,)
        forecast_dict["Chance of rain"] = forecasts_arr[j+7].substr(forecasts_arr[j+7].indexOf(":")+2,)
        forecasts.push(forecast_dict)
      } else {
        forecast_dict = {}
      }
    }
    console.log('forecasts: \n', forecasts);
  });

  return (
    <div className="App">
      <header className="App-header">        
        <h1 className="title">Kanda Weather Forecast</h1>
        <p>{}</p>
      </header>
    </div>
  );
}

export default App;
