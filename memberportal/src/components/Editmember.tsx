import { Typography } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MemberContext } from "../App";

export default function Editmember(match: any) {
  const { members, setMembers } = useContext(MemberContext);
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    salary: "",
  });

  const [index, setIndex] = useState(0);

  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  let handleChange = (e: any) => {
    const { name, value } = e.target;
    setMember((prevState) => ({ ...prevState, [name]: value }));
  };

  let handleUpdate = () => {
    let tmpMembers = [...members];
    tmpMembers[index].firstName = member.firstName;
    tmpMembers[index].lastName = member.lastName;
    tmpMembers[index].salary = member.salary;
    setMembers(tmpMembers);
    history.push("/memberlist");
    alert("Member details updated sucessfully!");
  };

  useEffect(() => {
    if (match.location.state !== undefined) {
      setMember(match.location.state.item);
      setIndex(match.location.state.index);
    }
  }, [match.location.state]);

  return (
    <div>
      <Typography
        variant="h6"
        component="h5"
        color="primary"
        gutterBottom
        align="center"
      >
        Edit Member
      </Typography>
      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={member.firstName}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Last Name: </td>
            <td>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={member.lastName}
                onChange={handleChange}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Salary: </td>
            <td>
              <input
                type="text"
                id="salary"
                name="salary"
                value={member.salary}
                onChange={handleChange}
              ></input>
            </td>
          </tr>

          <tr>
            <td>
              {/* <Link
              className="btnPrimary"
              to={{
                pathname: "/memberList",
                state: { member, Operation: "Edit", indexId: index },
              }}
            >
              Update
            </Link> */}
              <button
                name="update"
                value="Update"
                onClick={handleUpdate}
                className="btnPrimary"
              >
                Update
              </button>
            </td>
            <td>
              <button
                name="back"
                value="Back"
                onClick={handleBack}
                className="btnPrimary"
              >
                Back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
