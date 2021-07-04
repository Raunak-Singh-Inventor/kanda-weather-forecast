import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

export const WeatherDatePicker = (props) => {
  const [date, setDate] = useState();

  return (
    <div className="rainbow-m-around_small">
      <DatePicker
        formatStyle="large"
        value={date}
        onChange={(date) => {
          setDate(date);
          props.changed(date);
        }}
      />
    </div>
  );
};
