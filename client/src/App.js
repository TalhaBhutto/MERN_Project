import React from 'react';
import {Container} from '@material-ui/core';
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