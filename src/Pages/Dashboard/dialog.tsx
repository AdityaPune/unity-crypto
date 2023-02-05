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
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
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
  );
}

export interface poolProps {
  id: number;
  name: string;
  summary: string;
  img:string
}

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
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div style={{ display: "flex", gap: "10px" }}>
            <div>
              <img style={{ width: "280px" }} src={graph}></img>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <p style={{ marginBottom: "0px" }}>Pool Name:</p>
              <p style={{ marginTop: "0px" }}>Pool 1</p>
              <p style={{ marginBottom: "0px" }}>Total active holding:</p>
              <p style={{ marginTop: "0px" }}>$150k</p>
              <p style={{ marginBottom: "0px" }}>Total Borrower:</p>
              <p style={{ marginTop: "0px" }}>25</p>
              <p style={{ marginBottom: "0px" }}>Pool type:</p>
              <p style={{ marginTop: "0px" }}>Agriculture</p>
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
