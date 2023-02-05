import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Decimal from "decimal.js";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  InputAdornment,
  TextField,
  Box,
  Typography,
  Button,
  CardActions,
  CardContent,
  Card,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import "./login.scss";
// import { useWeb3Context } from "../../hooks";

import { createTheme, ThemeProvider, withStyles } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
// import {
//   createStyles,
//   fade,
//   Theme,
//   withStyles,
// } from "@material-ui/core/styles";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "rgb(230,179,82)",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

const useStyles = makeStyles({
  paper: {
    background: "#fff !important",
    border: "5px solid rgba(230,179,82) !important",
    borderRadius: "15px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#000 !important",
      border: "5px solid #fff !important",
      color: "#fff",
    },
  },
  papertwo: {
    background: "rgba(230,179,82)!important",
    border: "5px solid #fff !important",
    borderRadius: "15px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#000 !important",
      border: "5px solid rgba(230,179,82) !important",
      color: "#fff",
    },
  },
  specialOutline: {
    borderColor: "pink",
    borderWidth: 4,
  },
  input: {
    color: "#fff",
  },
});

function Login() {
  const dispatch = useDispatch();
  const [type, setType] = useState("default");
  const styles = useStyles();
  const navigate = useNavigate();
  const navigateToPage = (route: string) => {
    navigate(route);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [borrowReg, setBorrowReg] = useState(false);
  const card = (text: string) => (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Typography style={{ color: "#3939BF" }} component="h1" variant="h5">
          {text} Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              className: styles.input,
            }}
            className={styles.input}
            // InputProps={{
            //   classes: { notchedOutline: classes.specialOutline },
            // }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            style={{ color: "#fff" }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            style={{ color: "#3939BF" }}
          />
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              // labelStyle={{ fontSize: "63px" }}
              // style={{ color: "rgb(230, 179, 82)" }}
              onClick={() => navigateToPage("/borrowerDash")}
            >
              Sign In
            </Button>
          </ThemeProvider>

          <Grid container>
            <Grid item xs>
              <Link style={{ color: "#3939BF" }} href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                style={{ color: "#3939BF" }}
                onClick={() => setBorrowReg(true)}
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CardContent>
  );

  const firstcard = (text: string) => (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5" style={{}}>
          {text}
        </Typography>
      </Box>
    </CardContent>
  );

  return (
    <div className="login-view">
      {!borrowReg ? (
        type === "default" ? (
          <>
            <div className="protocol-stats">
              <Box className="stat-box">
                <Card
                  variant="outlined"
                  className={styles.paper}
                  onClick={() => navigateToPage("/dashboard")}
                >
                  {firstcard("Investor")}
                </Card>
              </Box>
              <Box className="stat-box">
                <Card
                  variant="outlined"
                  className={styles.papertwo}
                  onClick={() => setType("test")}
                >
                  {firstcard("Borrower")}
                </Card>
              </Box>
            </div>
          </>
        ) : (
          <>
            <div className="protocol-stats">
              <Box
                style={{ border: "20px solid rgba(28, 163, 174, 0.2)" }}
                className="stat-box"
              >
                <Card
                  variant="outlined"
                  style={{
                    background: "#151419",
                    border: "1px solid rgba(28, 163, 174, 0.2)",
                  }}
                >
                  {card("Borrower")}
                </Card>
              </Box>
            </div>
          </>
        )
      ) : (
        <>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                style={{ color: "#3939BF" }}
                component="h1"
                variant="h5"
              >
                Borrower Registration
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                />
                <ThemeProvider theme={theme}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                    // labelStyle={{ fontSize: "63px" }}
                    // style={{ color: "rgb(230, 179, 82)" }}
                  >
                    Sign Up
                  </Button>
                </ThemeProvider>

                <Grid container>
                  <Grid item>
                    <Link
                      style={{ color: "#3939BF" }}
                      onClick={() => setBorrowReg(false)}
                      variant="body2"
                    >
                      {"Already have account"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </>
      )}
    </div>
  );
}

export default Login;
