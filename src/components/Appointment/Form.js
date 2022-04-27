import React, { useState } from 'react';
import Button from "components/Button"
import InterviewerList from "components/InterviewerList";

export default function Form (props) {

const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);
const [error, setError] = useState("");


const reset = function () {
  setStudent("");
  setInterviewer(null);
}

const cancel = function () {
  reset();
  props.onCancel()
}

const validateStudent = function () {
  if (student === "") {
    setError("Student field cannot be blank");
    return;
  }
  setError("");
  props.onSave(student, interviewer)
  }


  return (
    <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        name={props.name}
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={(event) => setStudent(event.target.value)}
        data-testid="student-name-input"
      />
    </form>
    <section className="appointment__validation">{error}</section>
    <InterviewerList 
      interviewers={props.interviewers} interviewer={interviewer} onChange={setInterviewer}
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={event => validateStudent()}>Save</Button>
    </section>
  </section>
</main>
  )
}