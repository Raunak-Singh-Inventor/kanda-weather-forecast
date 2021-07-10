import React from "react";
import { Card } from "react-rainbow-components";
import "./TempCondHumidCard.css";

export default function TempCondHumidCard(props) {
  return (
    <Card className="card" style={{ borderColor: "purple", borderWidth: 5, width:400 }}>
      {props.userForecast.Condition === "Partly Cloudy" && props.isForecastPresent ? (
        <h1 style={{ fontSize: 200 }}>⛅</h1>
      ) : (
        console.log()
      )}
      {props.userForecast.Condition === "Cloudy" && props.isForecastPresent ? (
        <h1 style={{ fontSize: 200 }}>☁️</h1>
      ) : (
        console.log()
      )}
      {props.userForecast.Condition === "Sunny" && props.isForecastPresent ? (
        <h1 style={{ fontSize: 200 }}>☀️</h1>
      ) : (
        console.log()
      )}
      {props.isForecastPresent ? (
        <>
          <h1 style={{ fontFamily: "ExoMedium" }} className="temp-text">
            {props.userForecast.Temperature}
          </h1>
          <h1 style={{ fontFamily: "ExoMedium" }} className="cond-text">
            {props.userForecast.Condition}
          </h1>
          <h1 style={{ fontFamily: "ExoMedium" }} className="humidity-text">
            💧Humidity: {props.userForecast.Humidity}
          </h1>
          <h1 style={{ fontFamily: "ExoMedium" }} className="rain-text">
            🌧️Chance of Rain: {props.userForecast.chanceOfRain}
          </h1>
        </>
      ) : (
        <h1 style={{fontFamily:"ExoMedium",fontSize:50}}>We don't have data for that date and/or location</h1>
      )}
    </Card>
  );
}
