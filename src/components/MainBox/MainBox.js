import React from "react";
import { Card } from "react-rainbow-components";
import "./MainBox.css";

export default function MainBox(props) {
  return (
    <Card className="card" style={{ width: 350 }}>
      {props.isForecastPresent ? (
        <>
          <h1 className="temp-text">{props.userForecast.Temperature}</h1>
          <h1 className="cond-text">{props.userForecast.Condition}</h1>
          <h1 className="humidity-text">Humidity: {props.userForecast.Humidity}</h1>
        </>
      ) : (
        <h1 className="temp-text">Sorry</h1>
      )}
    </Card>
  );
}
