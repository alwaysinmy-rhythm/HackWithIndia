import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Agency from "../components/Agency";
import Searchnearby from "../components/Searchnearby";
import { useAuth } from "../context/auth";
import Temp from "../components/Temp";
import config from '../config.js';

export default function Home() {
  const { isLoggedIn, setIsLoggedIn, role, setRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !(
        window.localStorage.getItem("token") !== null &&
        window.localStorage.getItem("role") !== null
      )
    ) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("role");
      setIsLoggedIn(false);
      setRole("");
      navigate("/");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          {window.localStorage.getItem("role") === '"compostAgency"' && (
            <Agency />
          )}
          {window.localStorage.getItem("role") === '"donor"' && (
            <Searchnearby />
          )}
        </>
      ) : (
        <>
          <Temp />
          <Temp />
          <Temp />
          <Temp />
        </>
      )}
    </>
  );
}
