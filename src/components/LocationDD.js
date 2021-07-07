import React, { useState } from "react";
import { Picklist, Option } from "react-rainbow-components";

export const LocationDD = (props) => {
  const [loc, setLoc] = useState({});
  return (
    <div className="rainbow-m-around_small">
      <Picklist
        placeholder="Select A Location"
        formatStyle="large"
        onChange={(value) => {
          setLoc(value)
          props.onLocationChange(String(value.label).replace(",", ""));
        }}
        value={loc}
      >
        <Option name="header" label="Locations" variant="header" />
        {props.locations.map((location, i) => (
          <Option name={String(i)} label={location} />
        ))}
      </Picklist>
    </div>
  );
};
