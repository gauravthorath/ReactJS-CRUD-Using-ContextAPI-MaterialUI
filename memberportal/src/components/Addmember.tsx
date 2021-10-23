import { Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { MemberContext } from "../App";

export default function Addmember() {
  const { setMembers } = useContext(MemberContext); // no need to destructure member as on this page its not requried to use it from useContext
  const [member, setmember] = useState(); // Added state to create local instance of member to be added to context members on save click

  //on each change event of input fields update a local state object member by keeping other member of a object as it is using spread operator (...)
  let handleChange = (e: any) => {
    const { name, value } = e.target;
    setmember((prevState: any) => ({ ...prevState, [name]: value }));
  };

  //used useHistory hook from router package to go back to members page
  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  // Added newly added object in to the members array in Context using setMembers method
  let handleSave = () => {
    setMembers((oldMembers: any) => {
      return [...oldMembers, member];
    });
    history.push("/memberlist");
    alert("Member added sucessfully!");
  };

  return (
    <div>
      <Typography
        variant="h6"
        component="h5"
        color="primary"
        gutterBottom
        align="center"
      >
        Add Member
      </Typography>
      <table>
        <tbody>
          <tr>
            <td>
              <div>First Name:</div>
            </td>
            <td>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange} // On chnage updating first name field of local member object
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <div>Last Name:</div>
            </td>
            <td>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange} // On chnage updating last name field of local member object
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <div>Salary:</div>
            </td>
            <td>
              <input
                type="text"
                name="salary"
                placeholder="Salary"
                onChange={handleChange} // On chnage updating salary field of local member object
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <button
                name="save"
                value="Save"
                onClick={handleSave} //on save click called method to push local member object to context's members array
                className="btnPrimary"
              >
                Save
              </button>
            </td>
            <td>
              <button
                name="cancel"
                value="Cancel"
                onClick={handleBack} // send user back to members list using useHostory hook
                className="btnPrimary"
              >
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
