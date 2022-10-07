import React from "react";

import Card from "../UI/Card";
import classes from "./Userlist.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userdetail.map((user) => (
          <li key={"a" + Math.floor(Math.random() * 1000 * Math.random() * 2)}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
