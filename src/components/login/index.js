import React, {useState} from 'react';
import { Button, Box, makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {  createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root:{
            width:'600px',
            height:'300px',
            backgroundColor:'#D1FFD7',
        },

        root_v2:{
            marginTop:'50px',
            backgroundColor:'white',
            width: '100%',
            height: '100%',
            position:'relative',
        },

        loginTitle:{
            backgroundColor:'#A6D3A0',
            width:'%100',
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            marginTop:'3px',
            marginBottom:'3px',
        },

        loginInfo:{
        '& > *': {
            margin: '8px',
          },
        },

        loginScreen:{
            height:'200px',
            justifyContent:'flex-start',
            alignItems:'flex-start',
            display:'flex',
            flexDirection:'row',
            //backgorundColor:'#808782'
        },

        sendInfo:{
            backgroundColor:'#A6D3A0',
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            marginTop:'30px',
            marginBottom:'3px',
            width:'300px',
            marginLeft:'150px',
        },

    })
    );
export default () => {
    const classes=useStyles();
    const [firstname, setFirstname] = useState("");
    const [lasttname, setLastname] = useState("");
    const [contactnumber, setContactNumber] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");

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

    function validateForm() {
        //console.log("geldi")
        //console.log(firstname,lasttname,contactnumber,email,password)
        return email.length > 0 && password.length > 0 && firstname.length > 0 && lasttname.length > 0 && contactnumber.length > 0;
    }
    
    function sendData(event) {
        event.preventDefault();
        return console.log(firstname,lasttname,contactnumber,email,password);

    }




    return (
        <Box className={classes.root_v2} >
            <Box className={classes.loginTitle}>Account Registration</Box>
            <Box className={classes.loginScreen}>
                <form className={classes.loginInfo} noValidate autoComplete="off">
                    <TextField id="1" label="First Name" variant="outlined" value={firstname} onChange={e => setFirstname(e.target.value)}/>
                    <TextField id="2" label="Last Name" variant="outlined" value={lasttname} onChange={e => setLastname(e.target.value)} />
                    <TextField id="3" label="Contact Number" variant="outlined" value={contactnumber} onChange={e => setContactNumber(e.target.value)} />
                </form>
                <form className={classes.loginInfo} noValidate autoComplete="off" >
                    
                    <TextField id="4" label="Email Adress" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
                    <TextField id="5" label="Password" variant="outlined" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <TextField id="6" label="Confirm Password" variant="outlined" type="password" value={confirmpass} onChange={e => setConfirmpass(e.target.value)}/>

                </form>
            </Box>   

            <Button className={classes.sendInfo} onClick={sendData} disabled={!validateForm()} type="submit" >Send</Button>

     
        </Box>
        
    )
}
