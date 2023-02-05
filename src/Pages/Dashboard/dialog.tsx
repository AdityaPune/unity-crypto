import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import graph from "../../assets/images/agri.jpg";

import {
  // Chart as ChartJS,
  // CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {CategoryScale} from 'chart.js'; 

import { Line } from "react-chartjs-2";
// import faker from "@faker-js/faker";
import {faker} from '@faker-js/faker';
import { Chart as ChartJS } from 'chart.js/auto'
// import {faker} from 'faker';
// const faker = require('@faker-js/faker');
// Chart.register(CategoryScale);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    // height: "100%",
    // width: "100%",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    height: "100%",
    width: "100%",
  },
  "& .MuiTypography-root":{
    backgroundImage: "linear-gradient(to right, golder rgb(230,179,82), white)"
  }
}));

// const BootstrapDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   "& .MuiTypography-root":{
//     backgroundImage: "linear-gradient(to right, golder rgb(230,179,82), white)"
//   }
// }));

// const BootstrapDialogTitle = 
// MuiDialogTitle: {
//       root: {
//         backgroundColor: theme.palette.primary.main,
//         '& h6': {
//           color: 'red'
//         }
//       }
//     }

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (<div style={{backgroundImage: "linear-gradient(to right, rgb(230,179,82), white)" }}>
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
    </div>
  );
}

export interface poolProps {
  id: number;
  name: string;
  summary: string;
  img: string;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Pool growth',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};




export default function CustomizedDialogs(pool: poolProps) {
  const [open, setOpen] = React.useState(false);
  const { name, summary, id, img } = pool;
  //   console.log(name);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        More
      </Button>
      <BootstrapDialog
      // sx={{ color: 'green' }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          // style={{backgroundImage: "linear-gradient(to right, golder rgb(230,179,82), white)"}}
        >
          {name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height:"215px"
              }}
            >
              <Line options={options} data={data} />
            </div>
            <div style={{ marginLeft: "40px", backgroundImage: "linear-gradient(to right, rgb(230,179,82), white)", height: "220px", padding: "10px"}}>
             <div style={{display:"flex", height:"45px"}}> <p style={{ fontSize:"x-large", fontWeight:"600" }}>Pool Name:</p><p style={{ fontSize:"x-large", marginLeft:"10px" }}> {name}</p></div>
              
              <div style={{display:"flex", height:"45px"}}><p style={{ fontSize:"x-large", fontWeight:"600" }}>Total active holding:</p><p style={{ fontSize:"x-large", marginLeft:"10px" }}> $150k</p></div>
             
              <div style={{display:"flex", height:"45px"}}><p style={{ fontSize:"x-large", fontWeight:"600" }}>Total Borrower count:</p><p style={{ fontSize:"x-large", marginLeft:"10px" }}> 25</p></div>
           
              <div style={{display:"flex", height:"45px"}}><p style={{ fontSize:"x-large", fontWeight:"600" }}>Profit generated:</p><p style={{ fontSize:"x-large", marginLeft:"10px" }}> $1.5k</p></div>
    
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
