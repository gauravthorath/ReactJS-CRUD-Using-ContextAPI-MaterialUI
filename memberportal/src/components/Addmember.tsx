import { Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { MemberContext } from "../App";
import { useStyles } from "../Shared/CommonStyles";

export default function Addmember() {
  const { setMembers } = useContext(MemberContext); // no need to destructure member as on this page its not requried to use it from useContext
  const [member, setmember] = useState(); // Added state to create local instance of member to be added to context members on save click
  const cssClass = useStyles(); // hook to access classes defined in the component

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
    <form noValidate autoComplete="off">
      <Typography
        variant="h6"
        component="h5"
        color="primary"
        gutterBottom
        align="center"
      >
        Add Member
      </Typography>
      <TextField
        label="First Name"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="firstName"
        onChange={handleChange} // On chnage updating first name field of local member object
      />
      <TextField
        label="Last Name"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="lastName"
        onChange={handleChange} // On chnage updating first name field of local member object
      />
      <TextField
        label="Salary"
        variant="outlined"
        required
        fullWidth
        className={cssClass.field}
        name="salary"
        onChange={handleChange} // On chnage updating first name field of local member object
      />

      <Button
        name="save"
        value="Save"
        onClick={handleSave}
        variant="contained"
        color="primary"
        className={cssClass.btn}
        startIcon={<SaveIcon />}
      >
        Save
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
    </form>
  );
}
