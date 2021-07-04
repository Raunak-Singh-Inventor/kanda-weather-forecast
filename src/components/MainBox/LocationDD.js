import React, { useState } from "react";
import { Picklist, Option } from "react-rainbow-components";

export const LocationDD = (props) => {
  const [location, setLocation] = useState("");

  return (
    <div className="rainbow-m-around_small">
      <Picklist
        formatStyle="large"
        onChange={(value) => {
          setLocation(value);
          props.changed(value);
        }}
        value={location}
        label="Select Location"
        hideLabel
      >
        <Option name="header" label="Locations" variant="header" />
        {props.locations.map((location, i) => (
          <Option name={String(i)} label={location} />
        ))}
      </Picklist>
    </div>
  );
};
