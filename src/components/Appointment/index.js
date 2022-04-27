import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";
import useVisualMode from "../../hooks/useVisualMode"

export default function Appointment (props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const CONFIRM = "CONFIRM";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
//Save interview
  function save(name, interviewer) {
      
      const interview = {
        student: name,
        interviewer
    };
    transition(SAVING);

    props.bookInterview(props.id, interview)
    .then(() => {transition(SHOW)})
    .catch(error => transition(ERROR_SAVE, true))
};

  function remove() {
    transition(DELETING, true);

    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))
    .catch(error => transition(ERROR_DELETE, true));
  }

  return (
    <div>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} 
      />}
      {mode === SHOW && (
      <Show
      interview={props.interview}
      student={props.interview && props.interview.student}
      interviewer={props.interview && props.interview.interviewer && props.interview.interviewer.name}
      onDelete={() => transition(CONFIRM)} 
      onEdit={() => transition(EDIT)}
  />
  )}
  { mode === CREATE &&

    <Form
    interviewers={props.interviewers}
    onCancel={() => back(EMPTY)}
    onSave={save}

    /> }
  {mode === SAVING && <Status message="Saving" /> }
  
  {mode === DELETING && <Status message="Deleting" /> }

  {mode === CONFIRM && (
    <Confirm
      onConfirm={remove}
      onCancel={back}
      message="Are you sure you would like to delete?"
    />
  )}

  {mode === EDIT && (
    <Form
    student={props.interview.student}
    interviewers={props.interviewers}
    interviewer={props.interview.interviewer.id}
    onCancel={back}
    onSave={save}
    />

  )}

  {mode === ERROR_DELETE && 
  <Error message="Could not cancel appointment."
  onClose={back}
  />
  }

  {mode === ERROR_SAVE && 
  <Error message="Could not save appointment."
  onClose={back}
  />
  }
    </div>
  );
}