import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

export default function UsersForm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/search`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  let result = Object.keys(users).map((key: any) => users[key]);

  const navigate  = useNavigate();
  const handleRowClick = (id: number) => {
    navigate(`/users/edit/${id}`);
  } 

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((user: any) => {
            return (
              <TableRow onClick={() => handleRowClick(user.id)}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.status ? "A" : "I"}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
