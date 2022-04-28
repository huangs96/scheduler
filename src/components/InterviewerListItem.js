import React from "react";
import "components/InterviewerListItem.scss";
import classNames from 'classnames';

export default function InterviewerList(props) {
  const { name, avatar, selected } = props;
  const interviewerData = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
  })
  return (
    <li className={interviewerData} selected={selected} onClick={props.setInterviewer}>
      <img
        className="interviewers__item--image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};