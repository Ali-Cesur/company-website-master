/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import {
    Box,
    Typography,
    makeStyles,
    ListItem,
    List,
} from '@material-ui/core';
import dummydataDef from '../../dummydataDef';

const sorular = [
        [
        'Matematik',
        'Sayilar',
        '1.kısım',
        'Samanyolu galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '3',
        '3',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],

        [
        'Matematik',
        'kümeler',
        '2.kısım',
        'galaksisinde yer alan Dünya’mızın diğer gezegenlere ve Güneş’e olan uzaklığını aşağıdaki şekilde görebilirsin.  Gezegenimiz Güneşe o kadar uzak ki mesafeyi ancak milyonlar ile ifade edebiliyoruz. ',
        '2',
        '5',
        ],




]


const useStyles = makeStyles((theme)=>
({
    root:{
        color:'red',
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    main:{
        marginLeft:'20%',
        width: '100%',
        height: '100%',
    },
}))

const Konuanlatimi = ()  => {
    const classes=useStyles();
    return(
        <Box >
            <List>
                {sorular.map((value,index)=>{
                    return(
                        <ListItem
                            key={index}
                            index={index}
                            itemName={value}
                        >                        
                            <Box className={classes.main}>
                                <Typography style={{color:'black'}}>{value}</Typography>
                            </Box>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default Konuanlatimi;