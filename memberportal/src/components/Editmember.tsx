import { TextField, Button, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { MemberContext } from "../App";
import UpdateIcon from "@mui/icons-material/Update";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useStyles } from "../Shared/CommonStyles";

export default function Editmember(match: any) {
  const { members, setMembers } = useContext(MemberContext);
  const [member, setMember] = useState({
    id: "",
    firstName: "",
    lastName: "",
    salary: "",
  });
  const cssClass = useStyles(); // hook to access classes defined in the component

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
    tmpMembers[index].id = member.id;
    tmpMembers[index].firstName = member.firstName;
    tmpMembers[index].lastName = member.lastName;
    tmpMembers[index].salary = member.salary;
    setMembers(tmpMembers);
    history.push("/memberlist");
    alert("Member details updated sucessfully!");
  };

  useEffect(() => {
    if (match.location.state !== undefined) {
      setMember(match.location.state.row);
      setIndex(match.location.state.id);
    }
  }, [match.location.state]);

  return (
    <form noValidate autoComplete="off">
      <Typography
        variant="h6"
        component="h5"
        color="primary"
        gutterBottom
        align="center"
      >
        Edit Member
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="firstName"
        value={member.firstName}
        onChange={handleChange} // On chnage updating first name field of local member object
      />
      <TextField
        label="Last Name"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="lastName"
        value={member.lastName}
        onChange={handleChange} // On chnage updating first name field of local member object
      />
      <TextField
        label="Salary"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="salary"
        value={member.salary}
        onChange={handleChange} // On chnage updating first name field of local member object
      />
      <Button
        onClick={handleUpdate}
        variant="contained"
        color="primary"
        className={cssClass.btn}
        startIcon={<UpdateIcon />}
      >
        Update
      </Button>
      <Button
        name="cancel"
        value="Cancel"
        onClick={handleBack}
        variant="contained"
        color="primary"
        className={cssClass.btn}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>

      {/* <Link
              className="btnPrimary"
              to={{
                pathname: "/memberList",
                state: { member, Operation: "Edit", indexId: index },
              }}
            >
              Update
            </Link> */}
    </form>
  );
}
