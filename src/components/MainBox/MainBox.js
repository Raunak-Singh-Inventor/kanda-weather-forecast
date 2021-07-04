import React, { useEffect, useState } from "react";
import { LocationDD } from "./LocationDD";
import { WeatherDatePicker } from "./WeatherDatePicker";

export default function MainBox(props) {
  const [locations, setLocations] = useState([]);
  const [date, setDate] = useState();
  const [locationState, setLocationState] = useState("");

  useEffect(() => {
    let locations_list = [];
    for (var i = 0; i < props.forecasts.length; i++) {
      locations_list.push(props.forecasts[i].Location);
    }
    setLocations(Array.from(new Set(locations_list)));
  }, []);

  useEffect(() => {
    for (var i = 0; i < props.forecasts.length; i++) {
      if (
        String(date).includes(
          String(props.forecasts[i].Date)
            .replace(",", "")
            .replace("January", "Jan")
            .replace("February", "Feb")
            .replace("March", "Mar")
            .replace("April", "Apr")
            .replace("June", "Jun")
            .replace("July", "Jul")
            .replace("August", "Aug")
            .replace("September", "Sep")
            .replace("October", "Oct")
            .replace("November", "Nov")
            .replace("December", "Dec")
            .replace(" 1 ", " 01 ")
            .replace(" 2 ", " 02 ")
            .replace(" 3 ", " 03 ")
            .replace(" 4 ", " 04 ")
            .replace(" 5 ", " 05 ")
            .replace(" 6 ", " 06 ")
            .replace(" 7 ", " 07 ")
            .replace(" 8 ", " 08 ")
            .replace(" 9 ", " 09 ")
        ) === true &&
        locationState.label === props.forecasts[i].Location
      ) {
        console.log("YES");
      } else {
        console.log("NO");
      }
    }
  }, [date, locationState, props.forecasts]);

  return (
    <>
      <WeatherDatePicker changed={setDate} />
      <LocationDD changed={setLocationState} locations={locations} />
    </>
  );
}
