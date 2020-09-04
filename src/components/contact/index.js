import React from 'react';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Typography, Container } from '@material-ui/core';
import math from '../../images/math.png';

export default () => {
    return ( 
        <Box style={{display:'flex',flexDirection:'row'}}>
        <Box>
                <Box style={{display:'flex',width:'500px', height:'200px', backgroundColor:'grey', justifyContent:'center', alignItems:'center'}}>
                    <Typography>Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz Ali Nesli Oğuz </Typography>
                </Box>
                <Box style={{display:'flex',width:'500px', height:'100px', backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
                    <Button style={{backgroundColor:'pink'}}>StartLearningFree</Button>
                    <Button style={{backgroundColor:'pink'}}>StopLearningFree</Button>
                </Box>
            {/* <ButtonBase>
                <img src={math}/>    
            </ButtonBase> */}
        </Box>
                <Box style={{display:'flex',width:'500px', height:'300px', backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}}>asdd</Box>   

        </Box>
       
    )
}