import React,{useState} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container,TextField} from '@material-ui/core';
import useStyles from './styles';
import { LockOutlined } from '@material-ui/icons';
import Input from './Input';

function Auth() {
    const classes=useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)
    const isSignup=true;
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
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                    </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />
                        {isSignup &&<Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"  />}
                    </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignup?'Sign Up':'Sign In'}
                </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
