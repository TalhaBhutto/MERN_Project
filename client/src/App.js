import React from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import useStyles from './styles';
import NavBar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,ROute} from 'react-router-dom';
import Home from './components/Home/Home';

const App = () =>{
    
    return (
        <Container maxWidth="lg">
            <NavBar/>
            <Home/>
        </Container>
    );
}

export default App