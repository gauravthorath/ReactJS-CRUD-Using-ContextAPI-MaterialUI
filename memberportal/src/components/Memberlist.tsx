import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MemberContext } from "../App";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 25 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "salary", headerName: "Salary", width: 150 },
  {
    field: "View",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            console.log(cellValues);
          }}
        >
          View
        </Button>
      );
    },
  },
  {
    field: "Edit",
    renderCell: (cellValues) => {
      const { row, id } = cellValues;
      return (
        <Link
          to={{
            pathname: "/editmember",
            state: { row, id },
          }}
        >
          <Button variant="outlined" startIcon={<EditIcon />}>
            Edit
          </Button>
        </Link>
      );
    },
  },
  {
    field: "Delete",
    renderCell: (cellValues) => {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => {
            console.log(cellValues);
          }}
        >
          Delete
        </Button>
      );
    },
  },
];

export default function Memberlist(match: any) {
  const { members, setMembers } = useContext(MemberContext);

  function deleterecord(index: number, item: any) {
    let choice = window.confirm(
      `Are you sure you want to delete ${item.firstName} ${item.lastName}'s record?`
    );
    console.log(choice);
    if (choice) {
      let tmpMembers = [...members];
      tmpMembers.splice(index, 1);
      setMembers(tmpMembers);
    } else {
      return false;
    }
  }

  if (members.length > 0) {
    const rows: GridRowsProp = members;
    return (
      <div>
        <br />
        <br />{" "}
        <Link to="/addmember">
          <Button variant="outlined" startIcon={<AddIcon />}>
            Add Member
          </Button>
        </Link>
        <br /> <br /> <br />
        <Typography
          variant="h6"
          component="h5"
          color="primary"
          gutterBottom
          align="center"
        >
          Member List
        </Typography>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Salary</td>
              <td>View</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {members.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.firstName} </td>
                  <td>{item.lastName}</td>
                  <td> {item.salary}</td>
                  <td>
                    <Link
                      to={{
                        pathname: "/viewmember",
                        state: { item },
                      }}
                    >
                      <Button variant="outlined" startIcon={<PreviewIcon />}>
                        View
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: "/editmember",
                        state: { item, index },
                      }}
                    >
                      <Button variant="outlined" startIcon={<EditIcon />}>
                        Edit
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleterecord(index, item)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <></>;
  }
}
