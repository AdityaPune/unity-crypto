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
  const card = (text: string) => (
    <CardContent>
      <Typography style={{ color: "#4B584D", fontFamily: "OpenSans" }}>
        {text}
      </Typography>
      <Typography variant="h5" component="div">
        $12,000,000.00
      </Typography>
    </CardContent>
  );

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
      <div className="numbers">
        <div className="protocol-stats">
          
          <Box className="stat-box">
            <Card variant="outlined">{card("Pending Revenue in Pool")}</Card>
          </Box>
          <Box className="stat-box">
            <Card variant="outlined">{card("Matured Loan Revenue")}</Card>
          </Box>
        </div>
        <div className="personal-stats">
         <Box className="stat-box">
            <Card variant="outlined">{card("Total Revenue Used")}</Card>
          </Box>

        </div>
      </div>
        <Typography className="title">Your Loans</Typography>
      </div>
      <div className="add-button" onClick={()=>setShowContent(!showContent)}><p className="add-button-text">Sanction New Loan</p></div>
      <br></br>
      {showContent &&  (<SanctionLoan/>)}
    </div>
  );
}

export default BorrowerDashboard;
