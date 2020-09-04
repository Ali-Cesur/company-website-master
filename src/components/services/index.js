
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';
import {
    Box,
    Typography,
    makeStyles,
    Button,
    
} from '@material-ui/core';
import dummydataDef from '../../dummydataDef';
import Konuanlatimi from '../konuanlatimidosyasi';
import Soruanlatimi from '../soruanlatimidosyasi';
import List from '@material-ui/core/List';

import LeftItem from './leftItem';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme)=>
({
    root:{
        marginTop:'50px',
        backgroundColor:'white',
        width: '100%',
        display:'flex',
        flexDirection:'row',
        height: '100%',
    },
    leftMenu:{
        paddingTop:'100px',
        width:'40%',
        height:'100%',
        backgroundColor:'#f6f5f5',
        display:'flex',
        flexDirection:'column',
    },
    rightMenu:{
        paddingTop:'100px',
        width:'20%',
        height:'100%',
        backgroundColor:'#5e6f64',
    },
    mainroot:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'40px',
    },
    //başlık kısmı
    headerStyle:{
        backgroundColor:'white',
        
        height:'100px',
        width: '100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    textStyle:{
        color:'black',
        fontWeight:'bold',
        fontSize:'30px',
    },
    //başlık kısmı ^
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
    mainBox:{
        marginTop:'50px',
        justifyContent:'center',
        width:'80%',
        height:'100%',   
        color:'black',
        overflow:'auto',
    },
    mainlefttextStyle:{
        fontWeight:'bold',
        color:'black',
        fontSize:'20px',
        marginBottom:'10px',
    },
    lefttextStyle:{
        fontWeight:'bold',
        color:'black',
        marginLeft:'20px',
        fontSize:'15px',

    },

    

}))

const LessonsSteps = [
    { title : 'Doğal Sayılar ', content: <Konuanlatimi />, subTitle: [['Milyonlar'],['Örüntüler']]},
    { title : 'Doğal Sayılarla İşlemler', content: <Konuanlatimi />, subTitle: [['Doğal sayılarla Toplama ve Çıkarma İşlemleri'],['Zihinden Toplama ve Çıkarma İşlemleri'],['Doğal Sayılarla Çarpma İşlemi'],['Doğal Sayılarla Bölme İşlemi'],['Bir Sayının Karesi ve Küpü'],['Parantezli İşlemler']]},
    { title : 'Kesirler', content: <Konuanlatimi />, subTitle: [['Birim Kesirler'],['Bileşik ve Tam Sayılı Kesirler'],['Denk Kesirler ve Sıralama'],['Kesirlerle Hesaplamalar']]},
    { title : 'Kesirlerle İşlemler', content: <Konuanlatimi />, subTitle: [['Kesirlerle toplama ve çıkarma işlemleri']]},
    { title : 'Ondalık Gösterim', content: <Konuanlatimi />, subTitle: [['Ondalık Gösterimler'],['Ondalık Gösterimler Basamak Değerleri'],['Ondalık Gösterimleri Verilen Sayıları Karşılaştırma'],['Ondalık Gösterimlerle Toplama ve Çıkarma İşlemleri']]},
    { title : 'Yüzdeler', content: <Konuanlatimi />, subTitle: [['Yüzdeler'],['Kesir, Ondalık Gösterim ve Yüzde İfadelerini Karşılaştırma'],['Bir Çokluğun Yüzdesini Bulma']]},
    { title : 'Temel Geometrik Kavramlar ve Çizimler', content: <Konuanlatimi />, subTitle: [['Doğru, Doğru parçası ve Işın'],['İki Noktanın Birbirine Göre Konumu'],['Eşit Uzunluktaki Doğru Parçaları'],['Açılar'],['Doğruya Dik Çizme']]},
    { title : 'Üçgenler ve Dörtgenler', content: <Konuanlatimi />, subTitle: [['Çokgenler'],['Üçgen Çeşitleri ve Dörtgenler'],['Üçgenlerin ve Dörtgenlerin İç Açılarının Ölçüleri Toplamı']]},
    { title : 'Veri İşleme', content: <Konuanlatimi />, subTitle: [['Araştırma Sorusu'],['Sıklık Tablosu ve Sütun Grafiği']]},
    { title : 'Uzunluk ve Zaman Ölçme', content: <Konuanlatimi />, subTitle: [['Uzunluk Ölçme'],['Çevre'],['Zaman Ölçme']]},
    { title : 'Alan Ölçme', content: <Konuanlatimi />, subTitle: [['Dikdörtgenin Alanı'],['Alanı Tahmin Etme'],['Aynı Alana Sahip Farklı Dikdörtgenler Oluşturma']]},
    { title : 'Geometrik Cisimler', content: <Konuanlatimi />, subTitle: [['Dikdörtgenler Prizması'],['Dikdörtgenler Prizmasının Açınımı ve Yüzey Alanı']]},
];


const deneme = () => {
    const classes = useStyles();
    const [activeSec, setActiveSec] = useState(0);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);
    const [open10, setOpen10] = React.useState(false);
    const [open11, setOpen11] = React.useState(false);
    const [open12, setOpen12] = React.useState(false);

    const handleClick_1 = () => {
        setOpen1(!open1);
    };
    const handleClick_2 = () => {
        setOpen2(!open2);
    };
    const handleClick_3 = () => {
        setOpen3(!open3);
    };
    const handleClick_4 = () => {
        setOpen4(!open4);
    };
    const handleClick_5 = () => {
        setOpen5(!open5);
    };
    const handleClick_6 = () => {
        setOpen6(!open6);
    };
    const handleClick_7 = () => {
        setOpen7(!open7);
    };
    const handleClick_8 = () => {
        setOpen8(!open8);
    };
    const handleClick_9 = () => {
        setOpen9(!open9);
    };
    const handleClick_10 = () => {
        setOpen10(!open10);
    };
    const handleClick_11 = () => {
        setOpen11(!open11);
    };
    const handleClick_12 = () => {
        setOpen12(!open12);
    };
    const handleNext =() =>{
        setActiveSec((prevActiveSec)=>prevActiveSec + 1);
    }
    const handleBack =() =>{
        setActiveSec((prevActiveSec)=>prevActiveSec - 1);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.leftMenu}>
                <ListItem button onClick={handleClick_1}>
                
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[0].title}</Typography>   
                    {open1 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[0].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[0].subTitle[1]}</Typography>   

                    </ListItem>
                    </List>
                </Collapse>

                <ListItem button onClick={handleClick_2}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[1].title}</Typography>   
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[1]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[2]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[3]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[4]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[1].subTitle[5]}</Typography>   

                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_3}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[2].title}</Typography>   
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[2].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[2].subTitle[1]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[2].subTitle[2]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[2].subTitle[3]}</Typography>   

                    </ListItem> 
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_4}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[3].title}</Typography>   
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[3].subTitle[0]}</Typography>   
                    </ListItem>
                    
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_5}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[4].title}</Typography>   
                    {open5 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open5} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[4].subTitle[0]}</Typography>   
                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_6}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[5].title}</Typography>   
                    {open6 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open6} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[5].subTitle[0]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[5].subTitle[1]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[5].subTitle[2]}</Typography>   
                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_7}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[6].title}</Typography>   
                    {open7 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open7} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[6].subTitle[0]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[6].subTitle[1]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[6].subTitle[2]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[6].subTitle[3]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[6].subTitle[4]}</Typography>   
                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_8}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[7].title}</Typography>   
                    {open8 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open8} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[7].subTitle[0]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[7].subTitle[1]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[7].subTitle[2]}</Typography>   
                    </ListItem>
                    </List>
                </Collapse>
                <ListItem button onClick={handleClick_9}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[8].title}</Typography>   
                    {open9 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open9} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[8].subTitle[0]}</Typography>   
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[8].subTitle[1]}</Typography>   
                    </ListItem>
                    </List>
                </Collapse>
                
                <ListItem button onClick={handleClick_10}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[9].title}</Typography>   
                    {open10 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open10} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[9].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[9].subTitle[1]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[9].subTitle[2]}</Typography>   

                    </ListItem>
                    </List>
                </Collapse>
                
                <ListItem button onClick={handleClick_11}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[10].title}</Typography>   
                    {open11 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open11} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[10].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[10].subTitle[1]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[10].subTitle[2]}</Typography>   

                    </ListItem>
                    </List>
                </Collapse>
                
                <ListItem button onClick={handleClick_12}>
                <Typography className={classes.mainlefttextStyle}>{LessonsSteps[11].title}</Typography>   
                    {open12 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open12} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[11].subTitle[0]}</Typography>   

                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Typography className={classes.lefttextStyle}>{LessonsSteps[11].subTitle[1]}</Typography>   

                    </ListItem>
                    
                    </List>
                </Collapse>
                

            </Box>
            <Box>
                <Box className={classes.headerStyle}>               
                    <Typography className={classes.textStyle}>{LessonsSteps[activeSec].title}</Typography>           
                </Box>
                <Box className={classes.mainBox}>           
                    <Box>
                        {LessonsSteps[activeSec].content} 
                        <Box className={classes.mainroot}>
                            <Box>
                                <Button onClick={handleBack} className={classes.backButton}>Back</Button>
                            </Box>
                            <Box>
                                <Button onClick={handleNext} className={classes.nextButton}>Next</Button>
                            </Box>       
                        </Box>
                    </Box>    
                </Box>
            </Box>
            
            <Box>
            </Box>

        </Box>
        

        
    );
};

export default deneme;