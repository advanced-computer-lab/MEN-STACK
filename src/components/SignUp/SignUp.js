import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo2 from "./../../Images/logo2.png";

const theme = createTheme();
function SignUp() {
  const [showPass, setshowPass] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handlechange = (e) => {
    // e.preventDefault();
    setshowPass(!showPass);
  };

  return (
    <Grid container direction={"row-reverse"}>
      <Grid item sm={7} xs={12}>
        <Box
          sx={{
            width: ["100%", "60%"],
            height: ["30%", "50%"],
            m: "auto",
            mx: 7,
          }}
        >
          <img
            src={logo2}
            width="90%%"
            height="150"
            style={{ cursor: "pointer", marginTop: "77%" }}
            alt="Logo"
          />
        </Box>
      </Grid>
      <Grid item sm={5} xs={12}>
        <Box>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                m: "auto",
                "& > :not(style)": { mt: 4, mx: 3 },

                marginTop: 24.5,

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "box-shadow": "0px 0px 60px 7px #0a8fad",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
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
                  type={showPass ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="Show password" color="primary" />}
                  label="Show password"
                  onChange={handlechange}
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
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
