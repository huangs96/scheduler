import React from "react";
import DayListItem from "./DayListItem"

export default function DayList({days, value, onChange}) {

  const daysData = days.map((day) => {
    const { id, name, spots } = day;
    return (
      <DayListItem
        key={id}
        name={name}
        spots={spots}
        selected={name === value}
        setDay={onChange}
      />
    );
  });

  return (
    <ul>
      {daysData}
    </ul>
  )
};