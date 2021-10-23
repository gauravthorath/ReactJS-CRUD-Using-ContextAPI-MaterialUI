import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MemberContext } from "../App";
import { Typography } from "@mui/material";

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
    return (
      <div>
        <br />
        <br />
        <Link to="/addmember" className="btnPrimary">
          Add Member
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
                      View
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: "/editmember",
                        state: { item, index },
                      }}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="App-link"
                      onClick={() => deleterecord(index, item)}
                    >
                      Delete
                    </button>
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
