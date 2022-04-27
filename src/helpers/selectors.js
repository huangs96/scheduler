/* getAppointmentsForDay will take two arguments, state and name of the day we are getting appointments for */

export function getAppointmentsForDay(state, dayName) {
//use the find function to return specific day object to where the name property matches the dayName argument
  const day = state.days.find(day => day.name === dayName);
  //if the matching day object is empty/false, return empty array
  if (!day) {
    return [];
  }
  
  //accessing appointment array within the day object
  const dayOfAppointment = day.appointments;
  
  let appointmentInfo = [];
  //loop appointment array and store ids in id variable
  for (let id of dayOfAppointment) {
    //push appointment information that matches with id into empty array, to display appointments for given day
    appointmentInfo.push(state.appointments[id]);
  }
  return appointmentInfo;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  };

  const interviewData = {};

  interviewData.student=interview.student;
  interviewData.interviewer=state.interviewers[interview.interviewer];

  return interviewData;

}

export function getInterviewersForDay(state, dayName) {
  const day = state.days.find(day => day.name === dayName);
  if (!day) {
    return [];
  }

  const interviewerOfDay = day.interviewers;

  let interviewerInfo = [];

  for (let person of interviewerOfDay) {
    interviewerInfo.push(state.interviewers[person]);
  }
  return interviewerInfo;
}
