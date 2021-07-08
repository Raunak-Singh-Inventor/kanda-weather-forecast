import React, { useState } from "react";
import { DatePicker } from "react-rainbow-components";

export const WeatherDatePicker = (props) => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="rainbow-m-around_medium">
      <DatePicker
        formatStyle="large"
        placeholder="Select A Date"
        value={date}
        onChange={(date) => {
          setDate(date);
          props.changed(date);
        }}
      />
    </div>
  );
};
