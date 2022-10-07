import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const Adduser = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterUserAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    console.log("yes");
    event.preventDefault();
    if (enterUserAge.trim().length === 0 || enterUserName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "please Enter a valid name and age (non-empty-values)",
      });
      return;
    }
    console.log(enterUserName, enterUserAge);

    props.data({ name: enterUserName, age: enterUserAge });
    setUserName("");
    setUserAge("");
  };
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const errrorHandler = (event) => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form action="" onSubmit={AddUserHandler}>
          <label htmlFor="">UserName</label>
          <input type="text" value={enterUserName} onChange={userNameHandler} />
          <label for="">Age</label>
          <input type="text" value={enterUserAge} onChange={userAgeHandler} />
          <Button type={"submit"}>Add user</Button>
        </form>
      </Card>
    </>
  );
};
export default Adduser;
