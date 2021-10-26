import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useStyles } from "../Shared/CommonStyles";

export default function Viewmember(match: any) {
  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    salary: "",
  });
  const cssClass = useStyles(); // hook to access classes defined in the component

  let history = useHistory();

  let handleBack = () => {
    history.push("/memberlist");
  };

  useEffect(() => {
    if (match.location.state !== undefined) {
      setData(match.location.state.item);
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
        Member Details
      </Typography>

      <table>
        <tbody>
          <tr>
            <label>First Name:</label>
            <td>{data.firstName} </td>
          </tr>
          <tr>
            <label>Last Name: </label>
            <td>{data.lastName}</td>
          </tr>
          <tr>
            <label>Salary: </label>
            <td>${data.salary}</td>
          </tr>

          <tr>
            <td>
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
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
