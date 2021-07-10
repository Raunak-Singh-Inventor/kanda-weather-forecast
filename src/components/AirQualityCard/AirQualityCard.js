import React from "react";
import { Card } from "react-rainbow-components";
import GoodAirQualityImg from "../../images/GoodAirQuality.png";
import BadAirQualityImg from "../../images/BadAirQuality.png";

export default function AirQualityCard(props) {
  return (
    <Card style={{ margin: 15, borderColor: "purple", borderWidth: 5 }}>
      {props.isForecastPresent ? (
        <>
          <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
            💨Wind: {props.userForecast.Wind}
          </h1>
          {props.userForecast.Wind !== "Unknown" ? (
            props.userForecast.Wind.match(/\d+/) > 5 ? (
              <>
                <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
                  Good Air Quality
                </h1>
                <img
                  style={{ width: 100, height: 100 }}
                  src={GoodAirQualityImg}
                />
              </>
            ) : (
              <>
                <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
                  Bad Air Quality
                </h1>
                <img
                  style={{ width: 100, height: 100 }}
                  src={BadAirQualityImg}
                />
              </>
            )
          ) : (
            <>
              <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
                Air Quality: Unknown
              </h1>
              <h1 style={{ fontSize: 100, fontFamily: "ExoMedium" }}>🤔</h1>
            </>
          )}
        </>
      ) : (
        <h1 style={{fontFamily:"ExoMedium",fontSize:50}}>We don't have data for that date and/or location</h1>
      )}
    </Card>
  );
}
