import React from "react";
import classNames from 'classnames'
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__full": props.spots === 0,
  })


  const formatSpots = function() {
    const numOfSpots = props.spots;
    if (numOfSpots === 0) {
      return "no spots remaining";
    } else if (numOfSpots === 1) {
      return "1 spot remaining"
    } else {
      return `${numOfSpots} spots remaining`;
    }
  }

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="dayClass">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}