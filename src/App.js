import React, {useState} from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Layout from './components/Layout';
import Routes from './Routes';
import blueback from '../src/images/blueback.png';
import { Box  } from '@material-ui/core';

import { styled } from '@material-ui/core/styles';

const StyledBox = styled(Box)({
    //backgroundImage:'url('+blueback+')',
    width:"100%",
    height:"100%",
    display:'flex',
    backgroundColor:'white',
  })




const App=() => {
  const [isUser, setIsUser ] = useState(false);
  const loggedin = ()=>{
    if (isUser === false) {
      setIsUser(true);
    }
    
    
    console.log("isuser:",isUser)
    return isUser;
  };
  loggedin()
  if (loggedin() === true){

    return (
      <BrowserRouter>
      <div className="App">
        <Layout>
          <Navbar />
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
    );
  }

  else{
    return (
      <BrowserRouter>
      <div className="App">
        <Layout>
          <Navbar />
          <Routes />
        </Layout>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;


