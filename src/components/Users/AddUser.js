import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("")
  const [enteredUserAge, setEnteredUserAge] = useState("")

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value)

  }

  const changeUserAgeHandler = (event) => {
    setEnteredUserAge(event.target.value)

  }

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge)
    setEnteredUserAge("")
    setEnteredUserName("")
  }



  return (
    <>
      <ErrorModal title="Error occur" message="Smt went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" value={enteredUserName} onChange={changeUserNameHandler} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" value={enteredUserAge} onChange={changeUserAgeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser