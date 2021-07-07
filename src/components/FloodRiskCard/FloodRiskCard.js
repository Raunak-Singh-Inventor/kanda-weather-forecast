import React from "react";
import { Card } from "react-rainbow-components";

export default function FloodRiskCard(props) {
  console.log("Uyo, NG Soil Moisture Data: ", props.uyoNGsmData);
  console.log("Accra, GH Soil Moisture Data: ", props.accraGHsmData);
  if (
    props.location === "Uyo NG" &&
    props.uyoNGsmData !== "[object Object]" &&
    props.uyoNGsmData !== "undefined"
  ) {
    return (
      <Card style={{ width: 1000, margin: 15 }}>
        <h1 style={{ fontSize: 50 }}>Soil Moisture: {props.uyoNGsmData}</h1>
        {props.uyoNGsmData > 10 ? (
          <h1 style={{ fontSize: 50 }}>Flood Risk</h1>
        ) : (
          <h1 style={{ fontSize: 50 }}>No Flood Risk</h1>
        )}
      </Card>
    );
  } else if (
    props.location === "Accra GH" &&
    props.accraGHsmData !== "[object Object]" &&
    props.accraGHsmData !== "undefined"
  ) {
    return (
      <Card style={{ width: 1000, margin: 15 }}>
        <h1 style={{ fontSize: 50 }}>Soil Moisture: {props.accraGHsmData}</h1>
        {props.accraGHsmData > 10 ? (
          <h1 style={{ fontSize: 50 }}>Flood Risk</h1>
        ) : (
          <h1 style={{ fontSize: 50 }}>No Flood Risk</h1>
        )}
      </Card>
    );
  } else {
    return (
      <Card style={{ width: 1000, margin: 15 }}>
        <h1>Loading</h1>
      </Card>
    );
  }
}
