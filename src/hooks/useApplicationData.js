import { useState } from 'react';

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

}