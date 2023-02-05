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
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import education from "../../assets/images/education.jpg";
import healthcare from "../../assets/images/healthcare.jpg";
import retail from "../../assets/images/retail.jpg";
import agri from "../../assets/images/agri.jpg";
import CustomizedDialogs from "./dialog";
import "./dashboard.scss";
import classnames from "classnames";
import ProductList from "../../Components/ProductList";
import { styled } from "@mui/material/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(127, 42, 135)",
        "rgba(178, 73, 147)",
        "rgba(249, 157, 158)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(0, 111, 255, 1)",
        "rgba(178, 73, 147, 1)",
        "rgba(249, 157, 158, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  const dispatch = useDispatch();

  const card = (text: string) => (
    <CardContent>
      <Typography style={{ color: "rgb(230,179,82)", fontFamily: "OpenSans" }}>
        {text}
      </Typography>
      <Typography style={{color:"white"}} variant="h5" component="div">
        $12,000,000.00
      </Typography>
    </CardContent>
  );

  const pooldata = [
    {
      id: 1,
      name: "Agriculture",
      summary: "Summary about pool agenda, type, total amount and risk.",
      img: agri,
    },
    {
      id: 2,
      name: "Education",
      summary: "Summary about pool agenda, type, total amount and risk.",
      img: education,
    },
    {
      id: 3,
      name: "Healthcare",
      summary: "Summary about pool agenda, type, total amount and risk.",
      img: healthcare,
    },
    {
      id: 4,
      name: "Retail",
      summary: "Summary about pool agenda, type, total amount and risk.",
      img: retail,
    },
  ];

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <Typography style={{ color: "rgb(230,179,82)" }} className="title">
          Lending Marketplace
        </Typography>
      </div>
      <div className="numbers">
        <div className="protocol-stats">
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
            >
              {card("Total Value Locked")}
            </Card>
          </Box>
          <Box className="stat-box">
            <Card
              style={{
                backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
              }}
              variant="outlined"
            >
              {card("Loan Originated")}
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
              {card("Portfolio Balance")}
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
              {card("USDC Locked")}
            </Card>
          </Box>
        </div>
      </div>
      {/* <ProductList /> */}
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            marginRight: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Card style={{ background: "rgb(21,20,25)" }} sx={{ maxWidth: 345 }}>
            <Pie style={{ height: "300px", width: "200px" }} data={data} />
          </Card>
          <Card style={{ background: "rgb(21,20,25)" }} sx={{ maxWidth: 345 }}>
            <Pie style={{ height: "250px", width: "200px" }} data={data} />
          </Card>
        </div>
        <div className="pooldiv" style={{ width: "50%", marginLeft: "40px" }}>
          <Grid container spacing={1}>
            {pooldata.map((data, i) => {
              return (
                // <Grid container spacing={1}>
                <Grid item xs={6} key={i}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={data.img}
                      src="../../assets/images/agri.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {data.summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <CustomizedDialogs
                        id={data.id}
                        name={data.name}
                        summary={data.summary}
                        img={data.img}
                      ></CustomizedDialogs>
                    </CardActions>
                  </Card>
                </Grid>
                // </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
