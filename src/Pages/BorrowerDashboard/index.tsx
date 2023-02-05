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

  const card = (text: string, num:number) => (
    <CardContent>
      <Typography style={{ color: "rgb(230,179,82)", fontFamily: "OpenSans" }}>
        {text}
      </Typography>
      {num ?(
        <Typography style={{color:"white"}} variant="h5" component="div">
        {num}
      </Typography>
      ):(
        <Typography style={{color:"white"}} variant="h5" component="div">
        $12,000,000.00
      </Typography>
      )}
      {/* <Typography style={{color:"white"}} variant="h5" component="div">
        $12,000,000.00
      </Typography> */}
    </CardContent>
  );

  const [showContent, setShowContent] = useState(false)

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <div className="numbers">
        <div className="protocol-stats">
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
            >
              {card("Total Loan Sanctioned",0)}
            </Card>
          </Box>
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
            >
              {card("Total interest paid",0)}
            </Card>
          </Box>
        </div>
        <div className="personal-stats">
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
            >
              {card("Interest due next month",0)}
            </Card>
          </Box>
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
              className="card"
            >
              {card("Particiapted pools",2)}
            </Card>
          </Box>
        </div>
      </div>
        {/* <Typography style={{ color: "#3939BF" }} className="title">
          Your Loans
        </Typography> */}
      </div>
      <div className="add-button" onClick={() => setShowContent(!showContent)}>
        <p style={{ color: "rgb(21,20,25)" }}>Sanction New Loan</p>
      </div>
      <br></br>
      {showContent && <div><SanctionLoan /></div>}
    </div>
  );
}

export default BorrowerDashboard;
