import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const imageURL =
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("abc");
  const [email, setEmail] = useState("abc@gmail.com");
  const [type, setType] = useState("User");
  const [address, setAddress] = useState("123");
  const [phoneNumber, setPhoneNumber] = useState(1234567890);

  const [isValidPhone, setIsValidPhone] = useState(false);

  const validatePhoneNumber = (input) => {
    const value = input.replace(/\D/g, "");
    const isvalid = /^\d{10}$/.test(value);
    setIsValidPhone(isvalid);
  };

  const UpdateProfile = () => {};

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
      },
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        style={{ margin: "2em", fontFamily: "Quicksand", fontWeight: "600" }}
      >
        <ThemeProvider theme={theme}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
              <Card
                sx={{
                  maxWidth: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  alt="profile"
                  height="100"
                  image={imageURL}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    YOU
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {userName}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {email}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    +91 {phoneNumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card>
                <CardContent>
                  <Grid container spacing={2} style={{ marginLeft: "0.1em" }}>
                    <Grid item xs={10} style={{ marginTop: "1em" }}>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        Profile
                      </Typography>
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "1em" }}>
                      <TextField
                        id="standard-helperText-1"
                        label="First Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        fullWidth
                        autoComplete="off"
                        error={name === ""}
                        helperText={
                          name === ""
                            ? "Please enter a valid name containing only letters."
                            : ""
                        }
                      />
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "0.4em" }}>
                      <TextField
                        id="standard-helperText-4"
                        label="Username"
                        value={userName}
                        InputProps={{
                          readOnly: true,
                        }}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <TextField
                        id="outlined-read-only-input-5"
                        label="Email"
                        value={email}
                        InputProps={{
                          readOnly: true,
                        }}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "0.4em" }}>
                      <TextField
                        id="standard-helperText-4"
                        label="Type"
                        value={type}
                        InputProps={{
                          readOnly: true,
                        }}
                        fullWidth
                        autoComplete="off"
                      />
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "0.4em" }}>
                      <TextField
                        id="standard-helperText-1"
                        label="Address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        fullWidth
                        autoComplete="off"
                        error={address === ""}
                        helperText={
                          address === "" ? "address cnnnot be empty." : ""
                        }
                        multiline
                        rows={3}
                      />
                    </Grid>
                    <Grid item xs={10} style={{ marginTop: "0.4em" }}>
                      <TextField
                        id="standard-helperText-8"
                        label="Phone No."
                        value={phoneNumber}
                        onChange={(e) => {
                          validatePhoneNumber(e.target.value);
                          setPhoneNumber(e.target.value);
                        }}
                        fullWidth
                        autoComplete="off"
                        error={!isValidPhone}
                        helperText={
                          !isValidPhone ? "Please enter a 10-digit number." : ""
                        }
                      />
                    </Grid>
                  </Grid>
                  <div style={{ textAlign: "center", marginTop: "1em" }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={UpdateProfile}
                      style={{ marginTop: "1em", backgroundColor: "#2A386B" }}
                      sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                    >
                      UPDATE
                      {/* {!loading ? "UPDATE" : "Updating..."} */}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            style={{ marginTop: "5em" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              style={{ textAlign: "center" }}
            >
              <Button
                variant="contained"
                color="error"
                // onClick={handleLogIn}
                style={{ marginTop: "1em" }}
                sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}
              >
                Logout
                <LogoutIcon />
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Profile;