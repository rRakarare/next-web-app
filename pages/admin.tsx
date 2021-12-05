import axios from "axios";
import React, { useState, useEffect } from "react";

function Admin() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("api/getUsers");
      setUsers(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Users = users.map((item) => <div key={item.id}>{item.username}</div>);

  return <div>{Users}</div>;
}

export default Admin;
