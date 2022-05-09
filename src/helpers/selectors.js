/* getAppointmentsForDay will take two arguments, state and name of the day we are getting appointments for */

export function getAppointmentsForDay(state, dayName) {

  const day = state.days.find(day => day.name === dayName);
  if (!day) {
    return [];
  }

  return day.appointments.map((id) => state.appointments[id]);
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  };

  const interviewData = {};

  interviewData.student = interview.student;
  interviewData.interviewer = state.interviewers[interview.interviewer];

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
