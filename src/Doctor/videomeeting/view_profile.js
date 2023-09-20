import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
const View_Profile = (props) => {
  return (
    <div>
      {/* VIEW PATIENT PROFILE BUTTON */}

      <Tooltip title="View Patient Profile" placement="top">
        <Link to={`/doctor_patient_profile/${props.patientUID}`}>
          <IconButton target="_blank" style={{ color: "#ffffff" }}>
            <PersonIcon />
          </IconButton>
        </Link>

      </Tooltip>
    </div>
  );
};

export default View_Profile;
