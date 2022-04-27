import React from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment"
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from '../helpers/selectors'
import useApplicationData from '../hooks/useApplicationData'


export default function Application(props) {


  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

//get Appointments for day function
  const dailyAppointments = getAppointmentsForDay(state, state.day)
  ;
  
  const interviewers = getInterviewersForDay(state, state.day);

  const schedule = dailyAppointments.map((a) => {
    
    const interview = getInterview(state, a.interview)

    return  (
    <Appointment 
    {...a}
    key={a.id}
    interview={interview}
    interviewers={interviewers}
    bookInterview={bookInterview}
    cancelInterview={cancelInterview}
    />
    )
  })
  

  return (
    <main className="layout">
      <section className="sidebar">
      <img
      className="sidebar--centered"
      src="images/logo.png"
      alt="Interview Scheduler"
    />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList 
        days={state.days} 
        value={state.day} 
        onChange={setDay} 
      />
      </nav>
      <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
    />
      </section>
      <section className="schedule">
      {schedule}
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
