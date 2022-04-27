import { useState, useEffect } from 'react';
import Axios from 'axios'

export default function useApplicationData() {
  //default state
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  }); 

  //return Day state
  const setDay = day => { return setState ({...state, day}) };




  // book interview
  function bookInterview(id, interview) {
    const isEditingAppointment = !!state.appointments[id].interview
    const appointment = {
      ...state.appointments[id],
      interview: {...interview}
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //count spots remaining

    const apiUrl = `/api/appointments/${id}`;
    return Axios.put (apiUrl, {interview}).then(() => {
      const updatedDays = state.days.map(day => {
        return {...day, spots: day.name === state.day && !isEditingAppointment ? day.spots - 1 : day.spots}
      });
      setState({...state, appointments, days:updatedDays})
    });

  };

  function cancelInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    //count spots remaining

    const apiUrl = `/api/appointments/${id}`;
    return Axios.delete (apiUrl).then(() => {
      const updatedDays = state.days.map(day => {
        return {...day, spots: day.name === state.day ? day.spots + 1 : day.spots}
      });
      setState({...state, appointments, days:updatedDays})
    });
  }

  //getting API info with Axious
  useEffect(() => {
    const daysInfo = "/api/days";
    const appInfo = "/api/appointments";
    const interviewerInfo = "/api/interviewers";
    Promise.all([
      Axios.get(daysInfo),
      Axios.get(appInfo),
      Axios.get(interviewerInfo)
    ]).then((all) => {
      setState(prev => ({...prev, days:all[0].data, appointments:all[1].data, interviewers:all[2].data})); //we have to reference the state keys to update the state
    })
  }, []);

  return { state, setDay, bookInterview, cancelInterview}
}

//