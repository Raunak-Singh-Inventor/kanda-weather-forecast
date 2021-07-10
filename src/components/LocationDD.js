import React, { useState } from "react";
import { Picklist, Option } from "react-rainbow-components";

export const LocationDD = (props) => {
  const [loc, setLoc] = useState({});
  return (
    <div>
      <Picklist
        style={{ width: 250 }}
        placeholder="Select A Location"
        formatStyle="large"
        onChange={(value) => {
          setLoc(value);
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
