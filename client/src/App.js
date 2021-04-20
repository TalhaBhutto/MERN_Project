import React from 'react';
import {useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import NavBar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,ROute} from 'react-router-dom';

const App = () =>{
    const [currentId, setCurrentId] = useState("")
    const classes=useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        }, [currentId,dispatch])
    return (
        <Container maxWidth="lg">
            <NavBar/>
            
        </Container>
    );
}

export default App