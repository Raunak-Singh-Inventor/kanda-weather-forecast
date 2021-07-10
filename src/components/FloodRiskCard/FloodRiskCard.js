import React from "react";
import { Card, Spinner } from "react-rainbow-components";
import FloodImg from "../../images/Flood.png";

export default function FloodRiskCard(props) {
  console.log("Uyo, NG Soil Moisture Data: ", props.uyoNGsmData);
  console.log("Accra, GH Soil Moisture Data: ", props.accraGHsmData);
  if (
    props.location === "Uyo NG" &&
    props.uyoNGsmData !== "[object Object]" &&
    props.uyoNGsmData !== "undefined"
  ) {
    return (
      <Card
        style={{
          width: 600,
          margin: 15,
          borderColor: "purple",
          borderWidth: 5,
        }}
      >
        <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
          Soil Moisture: {props.uyoNGsmData}
        </h1>
        {props.uyoNGsmData > 10 ? (
          <>
            <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
              High Flood Risk
            </h1>
            <img style={{ width: 100, height: 100 }} src={FloodImg} />
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
              Low Flood Risk
            </h1>
            <h1 style={{ fontSize: 100 }}>👍</h1>
          </>
        )}
      </Card>
    );
  } else if (
    props.location === "Accra GH" &&
    props.accraGHsmData !== "[object Object]" &&
    props.accraGHsmData !== "undefined"
  ) {
    return (
      <Card
        style={{
          width: 600,
          margin: 15,
          borderColor: "purple",
          borderWidth: 5,
        }}
      >
        <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
          Soil Moisture: {props.accraGHsmData}
        </h1>
        {props.accraGHsmData > 10 ? (
          <>
            <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
              High Flood Risk
            </h1>
            <img style={{ width: 100, height: 100 }} src={FloodImg} />
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 50, fontFamily: "ExoMedium" }}>
              Low Flood Risk
            </h1>
            <h1 style={{ fontSize: 100 }}>👍</h1>
          </>
        )}
      </Card>
    );
  } else {
    return (
      <Card
        style={{
          width: 600,
          height: 100,
          margin: 15,
          borderColor: "purple",
          borderWidth: 5,
        }}
      >
        <Spinner size="large" />
      </Card>
    );
  }
}
