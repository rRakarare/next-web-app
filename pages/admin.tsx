import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid } from "../components/Basic/Grid/basic_grid.js";
import {
  Card,
  CardHeader,
  CardMain,
} from "../components/Cards/User/user-styles.js";
import styled from "styled-components";
import { Button } from "../components/Basic/Button/index.js";

function Admin() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("api/getUsers");
      setUsers(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Button color={"primary"}>Create User</Button>
      <Grid cols={4}>
        {users.map((user) => {
          console.log("user", user);
          return (
            <Card key={user.id}>
              <CardHeader>
                <strong>{user.username}</strong>
              </CardHeader>
              <CardMain>
                <p style={{ margin: ".1rem 0" }}>
                  <strong>Role:</strong> {user.role}
                </p>
              </CardMain>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

export default Admin;
