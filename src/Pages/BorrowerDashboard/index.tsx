import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Decimal from "decimal.js";
import {
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Box,
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
} from "@mui/material";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import "./dashboard.scss";
import classnames from "classnames";
import SanctionLoan from "../../Components/SanctionLoan";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
      backgroundImage: "linear-gradient(to right, rgb(230,179,82), white)",
    },
    input: {
      margin: theme.spacing(1),
      width: "25ch",
      color: "#fff",
      marginTop: "40px",
    },
    item: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      fontSize: "20px",
    },
  })
);
function BorrowerDashboard() {
  const card = (text: string, num: number) => (
    <CardContent>
      <Typography style={{ color: "rgb(230,179,82)", fontFamily: "OpenSans" }}>
        {text}
      </Typography>
      {num ? (
        <Typography style={{ color: "white" }} variant="h5" component="div">
          {num}
        </Typography>
      ) : (
        <Typography style={{ color: "white" }} variant="h5" component="div">
          $12,000,000.00
        </Typography>
      )}
      {/* <Typography style={{color:"white"}} variant="h5" component="div">
        $12,000,000.00
      </Typography> */}
    </CardContent>
  );
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    console.log("Hey");
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const [showContent, setShowContent] = useState(false);

  return (
    <div className="dashboard-view">
      <div className="dashboard-header">
        <div className="numbers">
          <div className="protocol-stats">
            <Box className="stat-box">
              <Card
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
                variant="outlined"
              >
                {card("Total Loan Sanctioned", 0)}
              </Card>
            </Box>
            <Box className="stat-box">
              <Card
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
                variant="outlined"
              >
                {card("Total interest paid", 0)}
              </Card>
            </Box>
          </div>
          <div className="personal-stats">
            <Box className="stat-box">
              <Card
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
                variant="outlined"
              >
                {card("Interest due next month", 0)}
              </Card>
            </Box>
            <Box className="stat-box">
              <Card
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4880EC, #019CAD)",
                }}
                variant="outlined"
                className="card"
              >
                {card("Particiapted pools", 2)}
              </Card>
            </Box>
          </div>
        </div>
        {/* <Typography style={{ color: "#3939BF" }} className="title">
          Your Loans
        </Typography> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="add-button"
          onClick={() => setShowContent(!showContent)}
        >
          <p style={{ color: "rgb(21,20,25)" }}>Sanction New Loan</p>
        </div>
        <div className="add-button" onClick={handleOpen}>
          <p style={{ color: "rgb(21,20,25)" }}>Repay Borrowings</p>
        </div>
      </div>
      <br></br>
      {open && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div className={classes.paper}>
            <Typography
              variant="h5"
              id="transition-modal-title"
              style={{ color: "#000" }}
            >
              Return an amount
            </Typography>
            <TextField
              id="standard-basic"
              label="Amount"
              style={{ marginTop: "25px" }}
              value={value}
              onChange={handleChange}
            />
            <Grid container spacing={1} style={{ marginTop: "15px" }}>
              <Grid item xs={5} className={classes.item}>
                <Typography>Pool: UC-210</Typography>
              </Grid>
              <Grid item xs={5} className={classes.item}>
                <Typography>APY: 11.21 %</Typography>
              </Grid>
              <Grid item xs={5} className={classes.item}>
                <Typography>Vesting: 6 months</Typography>
              </Grid>
              <Grid item xs={5} className={classes.item}>
                <Typography>Sector: Agriculture</Typography>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              style={{ marginTop: "20px" }}
            >
              Repay
            </Button>
          </div>
        </Modal>
      )}
      {showContent && (
        <div>
          <SanctionLoan />
        </div>
      )}
    </div>
  );
}

export default BorrowerDashboard;
