import React from "react";
import { Card } from "react-rainbow-components";

export default function AirQualityCard(props) {
  return (
    <Card style={{ width: 1000, margin: 15 }}>
      {props.isForecastPresent ? (
        <>
          <h1 style={{ fontSize: 50 }}>Wind: {props.userForecast.Wind}</h1>
          {props.userForecast.Wind.match(/\d+/) > 10 ? (
            <h1 style={{ fontSize: 50 }}>Good Air Quality</h1>
          ) : (
            <h1 style={{ fontSize: 50 }}>Bad Air Quality</h1>
          )}
        </>
      ) : (
        <h1>Sorry</h1>
      )}
    </Card>
  );
}
