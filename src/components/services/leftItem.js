import React, {useState} from 'react';
import { Button, Box, makeStyles, ButtonBase, Typography, List } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import {  createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root:{
            width:'240px',
            height:'100px',
            marginBottom:'30px',
        },
        textStyle:{
            fontWeight:'bold',
            color:'black'
        }

    })
    );


const LeftItem = () => {
    const classes = useStyles();
    return (
        <Button className={classes.root} >
            <Typography className={classes.textStyle}>MATETAMİK</Typography>
        </Button>
        
    )
}

export default LeftItem;
