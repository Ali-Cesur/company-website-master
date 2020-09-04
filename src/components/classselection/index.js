import React, {useState} from 'react';
import { Button, Box, makeStyles, ButtonBase, createStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';



const useStyles = makeStyles((theme) => ({
    root:{
        
    },

    buttonstyle: {
        width:'300px',
        height:'300px',
    },

    backimage: {
        width:'200px',
        height:'200px',
    },


}));
export default () => {
        const classes = useStyles();

        const sendData=(event) =>{
            event.preventDefault();
            return         window.location = 'http://localhost:3000/services';
    
        }

        return (
            <Box className={classes.root}>
                <Box>            
                    <ButtonBase className={classes.buttonstyle} onClick={sendData}>
                        4
                        <img className={classes.backimage} src={img4} />
                    </ButtonBase>
                    
                </Box>
                <Box>            
                    <ButtonBase className={classes.buttonstyle} onClick={sendData}>
                        5
                        <img className={classes.backimage} src={img5} />
                    </ButtonBase>
                    
                </Box>
                <Box>            
                    <ButtonBase className={classes.buttonstyle} onClick={sendData}>
                        6
                        <img className={classes.backimage} src={img4} />
                    </ButtonBase>
                    
                </Box>
            </Box>
        );
}

