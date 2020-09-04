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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'react-bootstrap';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';


const sorular = [
    //{ title : 'Doğal Sayılar ', content: <Konuanlatimi />, subTitle: [['Milyonlar'],['Örüntüler']]},

    { title : 'Aşağıdakilerden hangisi en küçüktür?', subTitle: [['24'],['25'],['26'],['27']], answer:'A', solution:'aha da gördüğün gibi'},
    { title : 'Aşağıdaki sayılardan hangisi en büyüktür?', subTitle: [['3'],['4'],['6'],['9']], answer:'A', solution:'aha da gördüğün gibi'}


]


const useStyles = makeStyles((theme)=>
({
    
    nextButton:{
        marginTop:'6px',
        backgroundColor:'#37474f',
        color:'white',
        marginLeft:'50px',
        marginBottom:'20px',


    },
    backButton:{
        marginRight:'50px',
        marginTop:'6px',
        color:'white',
        marginBottom:'20px',

        backgroundColor:'#37474f',  
    },
    mainroot:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        
    },

    mainBox:{
        width:'40%',
        height:'50%',
        display:'flex',
        
        justifyContent:'center',
        alignItems:'center',
        
    },
    showAnsButton:{
        display:'flex',
        backgroundColor:'grey',
        marginTop:'5%',
    },
    nested:{
        display:'flex',
        flexDirection:'column',

    }
}))

const Soruanlatimi = ()  => {
    const classes = useStyles();
    const [activeSec, setActiveSec] = useState(0);
    const [showAns, setShow] = useState(false);


    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
      });

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleNext =() =>{
        setActiveSec((prevActiveSec)=>prevActiveSec + 1);
    }
    const handleBack =() =>{
        setActiveSec((prevActiveSec)=>prevActiveSec - 1);
    }

    const handleShow =() =>{
        setShow(!showAns);
    }

    return(
        <Box className={classes.mainroot}>
            <Box>
                <Button onClick={handleBack} className={classes.backButton}>Back</Button>
            </Box>
            <Box className={classes.mainBox}>
                <List>      
                    <ListItem style={{display:'flex', flexDirection:'column'}}>                            
                        <Typography>{sorular[activeSec].title}</Typography>
                            <Box style={{display:'flex', flexDirection:'row'}}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                        label={sorular[activeSec].subTitle[0]}
                                        
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                                        label={sorular[activeSec].subTitle[1]}
                                        
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" />}
                                        label={sorular[activeSec].subTitle[2]}   
                                    />
                                    <FormControlLabel
                                        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                                        label={sorular[activeSec].subTitle[3]}   
                                    />
                                </FormGroup>
                            </Box>
                                <Button className={classes.showAnsButton} onClick={handleShow}>Cevabı Göster</Button>   
                                    {showAns ? <ExpandLess /> : <ExpandMore />}
                                <Collapse in={showAns} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested}>
                                            <Typography className={classes.lefttextStyle}>{sorular[activeSec].solution}</Typography>   
                                            <Typography className={classes.lefttextStyle}>{sorular[activeSec].answer}</Typography>   
                                        </ListItem>
                                    </List>
                                </Collapse>                    
                    </ListItem>
                        
                </List>
            </Box>        
            <Box>
                <Button onClick={handleNext} className={classes.nextButton}>Next</Button>
            </Box>       
        </Box>
    );
};




/* const Soruanlatimi = ()  => {
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
                            <Typography>{value}</Typography>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
}; */

export default Soruanlatimi;