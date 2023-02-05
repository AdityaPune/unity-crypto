import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Decimal from "decimal.js";
import {
  Grid,
  InputAdornment,
  OutlinedInput,
  Box,
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";

import "./dashboard.scss";
import classnames from "classnames";
import SanctionLoan from "../../Components/SanctionLoan";

function BorrowerDashboard() {

  const [showContent, setShowContent] = useState(false)

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <Typography style={{ color: "#3939BF" }} className="title">
          Your Loans
        </Typography>
      </div>
      <div className="add-button" onClick={() => setShowContent(!showContent)}>
        <p className="add-button-text">Sanction New Loan</p>
      </div>
      <br></br>
      {showContent && <SanctionLoan />}
    </div>
  );
}

export default BorrowerDashboard;
