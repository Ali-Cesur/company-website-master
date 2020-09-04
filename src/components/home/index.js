import React, { useState } from "react";
import { Button, Box, makeStyles, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import bg from "../../images/back.jpg";
import blueback from "../../images/blueback.png";
import { Route, Switch } from "react-router-dom";
import Services from "../services/index";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      
    },
    fullroot:{
      marginTop:'50px',
        backgroundColor:'white',
        width: '50%',
        marginLeft:'40%',
        marginRight:'10%',
        display:'flex',
        flexDirection:'row',
        height: '100%',
      
    },
    loginTitle: {
      backgroundColor: "#e3e9f2ff",
      width: "%100",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginTop: "3px",
      marginBottom: "3px",
    },

    loginInfo: {
      "& > *": {
        margin: "8px",
      },
      display: "flex",
      flexDirection: "column",
    },

    textStyle: {
      fontSize: "20px",
    },
    textHeader: {
      fontSize: "30px",
    },

    loginScreen: {
      height: "200px",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
      display: "flex",
      marginLeft: "30px",

      //backgorundColor:'#808782'
    },

    sendInfo: {
      backgroundColor: "#A6D3A0",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginTop: "30px",
      marginBottom: "3px",
      width: "300px",
      marginLeft: "30px",
    },
  })
);
export default () => {
  const classes = useStyles();
  const validateForm = () => {
    //console.log("geldi")
    //console.log(firstname,lasttname,contactnumber,email,password)
    return email.length > 0 && password.length > 0;
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(email, password);
    return (window.location = "http://localhost:3000/classselection");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUser, setIsUser] = useState("");
  const loggedin = () => {
    if (isUser === false) {
      setIsUser(true);
    }

    console.log("isuser:", isUser);
    return isUser;
  };
  loggedin();
  if (loggedin() === true) {
    return (
      <Box className={classes.root}>
        <Box className={classes.loginScreen}>
          <Typography>Selam</Typography>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={classes.fullroot}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Box className={classes.root}>
            <Box className={classes.loginTitle}>Selam</Box>
            <Box className={classes.loginScreen}>
              <form className={classes.loginInfo} noValidate autoComplete="off">
                <Typography className={classes.textStyle}>
                  Selam sana Demirayak
                </Typography>
                <Typography className={classes.textStyle}>
                  Merhaba kartalgöz
                </Typography>
                </form>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box className={classes.root}>
            <Box className={classes.loginTitle}>Account Registration</Box>
            <Box className={classes.loginScreen}>
              <form className={classes.loginInfo} noValidate autoComplete="off">
                <TextField
                  id="1"
                  label="Email Adress"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="2"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>
            </Box>

            <Button
              className={classes.sendInfo}
              onClick={sendData}
              disabled={!validateForm()}
              type="submit"
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
      </Box>
    );
  }
  /*     var mysql = require('mysql');
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password: '',
        database: 'nodejs-test'
    });

    connection.connect(function(err){
        if (err){
            console.error('veri tabanina baglanirken hata: ' + err.stack);
            return;
        }
    }); */
};
