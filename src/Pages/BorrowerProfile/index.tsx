import { useState, useEffect } from "react";
import "./borrower.scss";
import {
  Grid,
  InputAdornment,
  OutlinedInput,
  Backdrop,
  Slider,
  Fade,
  Box,
  Typography,
} from "@mui/material";
import Office from "../../assets/icons/office.png";

function BorrowerProfile() {
  return (
    <div style={{ color: "white" }} className="borrower-profile-view">
      <div className="header-container">
        <Typography style={{ color: "white" }} className="title">
          Borrower Profile
        </Typography>
        <Typography style={{ color: "white" }} className="subtitle">
          Series A1
        </Typography>
      </div>
      <div className="content-container">
        <div className="factsheet-container">
          <Typography style={{ color: "white" }} className="factsheet">
            Factsheet
          </Typography>
          {/* <img src={Office} /> */}
        </div>
        <div className="details-container">
          <Grid container spacing={2} className="details">
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="bold">
                Founded Year
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="normie">
                Jan 2024
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="bold">
                Founder Background
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="normie">
                CEO xyz Industry
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="bold">
                Business Description
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="normie">
                Revenue Based/Invoice Discounting
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="bold">
                Funded By
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="normie">
                ABC Angel Investor
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }} className="bold">
                Data Underwriting Capabilities
              </Typography>
            </Grid>
            <Grid item xs={5} className="details-item">
              <Typography style={{ color: "white" }}  className="normie">
                Revenue based/Invoice Discounting. Real time asset description.
                Revenue based/Invoice DiscountingReal time asset description.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default BorrowerProfile;
