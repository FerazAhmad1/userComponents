import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper.js/Wrapper";

const Adduser = (props) => {
  const inputUserNameRef = useRef();
  const inputUserAgeRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    const enterUserName = inputUserNameRef.current.value;
    const enterUserAge = inputUserAgeRef.current.value;
    console.log(inputUserAgeRef.current.value, inputUserNameRef);
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
    inputUserNameRef.current.value = "";
    inputUserAgeRef.current.value = "";
  };

  const errrorHandler = (event) => {
    setError(null);
  };
  return (
    <Wrapper>
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
          <input type="text" ref={inputUserNameRef} />
          <label for="">Age</label>
          <input type="text" ref={inputUserAgeRef} />
          <Button type={"submit"}>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default Adduser;
