import React, { useState } from "react";
import Adduser from "./Components/Users/Adduser";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const userInputs = (data) => {
    setUsers((prevUsers) => {
      return [...prevUsers, data];
    });
  };
  return (
    <div>
      <Adduser data={userInputs} />
      <UserList userdetail={users} />
    </div>
  );
}

export default App;
