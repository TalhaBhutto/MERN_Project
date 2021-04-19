import React from 'react';
import {useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts'
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () =>{
    const [currentId, setCurrentId] = useState("")
    const classes=useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        }, [currentId,dispatch])
    return (
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App