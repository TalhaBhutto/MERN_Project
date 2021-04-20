import React from 'react';
import {Container} from '@material-ui/core';
import NavBar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,ROute} from 'react-router-dom';
import Home from './components/Home/Home';

const App = () =>{
    
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" exact component={Auth}/>
            </Switch>
            <Home/>
        </Container>
        </BrowserRouter>
    );
}

export default App