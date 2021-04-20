import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {Container,Grow,Grid} from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
function Home() {
    const [currentId, setCurrentId] = useState("")
    const classes=useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        }, [currentId,dispatch])
    return (
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
    )
}

export default Home
