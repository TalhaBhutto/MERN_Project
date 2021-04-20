import React from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container,TextField} from '@material-ui/core';
import useStyles from './styles';
import { LockOutlined } from '@material-ui/icons';

function Auth() {
    const classes=useStyles();
    const isSignup=false;
    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant="h5">
                    {isSignup?'Sign Up':'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Grid xs={6} md={12}>
                                    <TextField name="firstName" label="First Name" handleChange={handleChange} autoFocus sx={6}/>
                                    </Grid>
                                    <Grid xs={6} md={12}>
                                    <TextField name="lastName" label="Last Name" handleChange={handleChange} sx={6}/>
                                    </Grid>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
