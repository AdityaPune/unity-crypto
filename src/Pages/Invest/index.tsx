import { useState, useEffect } from "react";
import "./security.scss";
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Typography,
  TextField,
  Grid,
} from "@mui/material";
import FactList from "../../Components/FactList";
import OrderList from "../../Components/OrderList";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Address, ADDRESS_BY_NETWORK_ID } from "../../constants/address";
import ProductList from "../../Components/ProductList";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { investMoney } from "../../helpers/transact";

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

function createData(
  poolName: string,
  sectorName: string,
  apy: string,
  maturity: string,
  poolAmountAvailable: string,
  minInvestment: string
) {
  return {
    poolName,
    sectorName,
    apy,
    maturity,
    poolAmountAvailable,
    minInvestment,
  };
}

function Invest() {
  const networkInfo = useSelector(
    (state: RootState) => state.account.networkInfo
  );
  const provider = useSelector((state: RootState) => state.account.provider);

  const contractInfo =
    ADDRESS_BY_NETWORK_ID[networkInfo?.chainId.toString() as Address | "80001"];

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

  const rows = [
    createData(
      "UC-210",
      "Agriculture",
      "11.21%",
      "Monthly",
      "$1,200,000",
      "$1000"
    ),
    createData(
      "UC-90",
      "Home Loans",
      "13.06%",
      "Monthly",
      "$15,800,000",
      "$3000"
    ),
    createData(
      "UC-1111",
      "Pharmaceutical",
      "11.21%",
      "Monthly",
      "$4,500,000",
      "$1500"
    ),
    createData(
      "UC-1738",
      "Retail",
      "11.21%",
      "Monthly",
      "$11,200,000",
      "$3000"
    ),
  ];

  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="security-view">
      <div className="header-container">
        <Typography className="title">Investment Opportunities</Typography>
        <Typography className="subtitle">Series A1</Typography>
      </div>
      <TableContainer component={Paper} className="table-container">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead className="table-head">
            <TableRow className="head-row">
              <TableCell className="head-cell">Pool</TableCell>
              <TableCell className="head-cell">Sector</TableCell>
              <TableCell className="head-cell">APY</TableCell>
              <TableCell className="head-cell">Frequency</TableCell>
              <TableCell className="head-cell">Liquidity Needed</TableCell>
              <TableCell className="head-cell">Minimum Investment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {rows.map((row) => (
              <TableRow
                key={row.poolName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={handleOpen}
                className="body-row"
              >
                <TableCell component="th" scope="row">
                  {row.poolName}
                </TableCell>
                <TableCell>{row.sectorName}</TableCell>
                <TableCell>{row.apy}</TableCell>
                <TableCell>{row.maturity}</TableCell>
                <TableCell>{row.poolAmountAvailable}</TableCell>
                <TableCell>{row.minInvestment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
              Invest into Lending Pool
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
              Invest
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Invest;
