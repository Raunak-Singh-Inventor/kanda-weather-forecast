import React from "react";
import { Card } from "react-rainbow-components";

export default function FloodRiskCard(props) {
  console.log(props.accraGHsmData)
  return (
    <Card style={{ width: 1000, margin: 15 }}>
      <h1>{props.location}</h1>
    </Card>
  );
}
