import React from 'react';
import Button from '@material-ui/core/Button';
import { Box, ButtonBase, Typography } from '@material-ui/core';
import math from '../../images/math.png';

export default () => {
    return (    
        <Box>
            <ButtonBase>
                <img src={math}/>    
            </ButtonBase>
        </Box>
    )
}