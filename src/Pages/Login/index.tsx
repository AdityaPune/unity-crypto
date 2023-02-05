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
const useStyles = makeStyles({
  paper: {
    background: "#fff",
    border: "5px solid rgba(230,179,82)",
    borderRadius: "15px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#000",
      border: "5px solid #fff",
      color: "#fff",
    },
  },
  papertwo: {
    background: "rgba(230,179,82)",
    border: "5px solid #fff",
    borderRadius: "15px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#000",
      border: "5px solid rgba(230,179,82)",
      color: "#fff",
    },
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
  const card = (text: string) => (
    <CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
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
      {type === "default" ? (
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
              onClick={() => navigateToPage("/borrowerDash")}
            >
              {firstcard("Borrower")}
            </Card>
          </Box>
        </div>
      ) : (
        <div className="protocol-stats">
          <Box className="stat-box">
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
      )}
    </div>
  );
}

export default Login;
