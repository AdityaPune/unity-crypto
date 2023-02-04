import {
  Grid,
  Button,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";
import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

function ProductList() {
  const navigate = useNavigate();

  const navigateToTokenOfferings = () => {
    navigate("/token");
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
  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
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
              onClick={navigateToTokenOfferings}
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
  );
}

export default ProductList;
