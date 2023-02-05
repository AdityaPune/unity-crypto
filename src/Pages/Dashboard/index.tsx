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
import poolimg from "../../assets/images/agri.jpg";
import CustomizedDialogs from "./dialog";
// import Grid from "@material-ui/core/Grid";

import "./dashboard.scss";
// import { useWeb3Context } from "../../hooks";

import { Skeleton } from "@material-ui/lab";
import classnames from "classnames";
import ProductList from "../../Components/ProductList";
import { styled } from "@mui/material/styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import { FaEllipsisH } from "react-icons/fa";

// import _ from '../../assets/images/agri.jpg'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
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
  //   const { provider, address, connect, chainID, checkWrongNetwork } =
  //     useWeb3Context();

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

  const pooldata = [
    {
      id: 1,
      name: "pool1",
      summary: "Summary about pool agenda, type, total amount and risk.",
    },
    {
      id: 2,
      name: "pool2",
      summary: "Summary about pool agenda, type, total amount and risk.",
    },
    {
      id: 3,
      name: "pool3",
      summary: "Summary about pool agenda, type, total amount and risk.",
    },
    {
      id: 4,
      name: "pool4",
      summary: "Summary about pool agenda, type, total amount and risk.",
    },
  ];

  // const Card = styled(card)(({ theme }) => ({
  //   "& .MuiPaper-root": {
  //     padding: theme.spacing(2),
  //     // height: "100%",
  //     width: "33%",
  //   }
  // }));

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <Typography className="title">Lending Marketplace</Typography>
      </div>
      <div className="numbers">
        <div className="protocol-stats">
          <Box className="stat-box">
            <Card variant="outlined">{card("Total Value Locked")}</Card>
          </Box>
          <Box className="stat-box">
            <Card variant="outlined">{card("Loan Originated")}</Card>
          </Box>
        </div>
        <div className="personal-stats">
          <Box className="stat-box">
            <Card variant="outlined">{card("Portfolio Balance")}</Card>
          </Box>
          <Box className="stat-box">
            <Card variant="outlined" className="card">
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
        <div style={{ width: "25%", marginRight: "140px" }}>
          <Card sx={{ maxWidth: 345 }}>
            <Pie style={{ height: "200px", width: "200px" }} data={data} />
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <Pie style={{ height: "200px", width: "200px" }} data={data} />
          </Card>
        </div>
        <div className="pooldiv" style={{ width: "50%", marginLeft: "140px" }}>
          <Grid container spacing={1}>
            {pooldata.map((data, i) => {
              return (
                // <Grid container spacing={1}>
                <Grid item xs={6} key={i}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={poolimg}
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
