import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, TextField } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import memories from '../../images/memories.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';
import Media from 'react-media';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <>
      <Media query="(max-width:400px)">
        {
          matches => {
            return matches ? (
              <>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <div className={classes.brandContainer}>
                      <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">Memories</Typography>
                      <img className={classes.image} src={memories} alt="icon" height="60" />
                    </div>
                  </AppBar>

                  <AppBar className={classes.appBar} position="static" color="inherit">
                      <div><TextField className={classes.SearchText}></TextField>
                      <Button><SearchOutlinedIcon/></Button>
                      </div>
                      {
                        !user?.result &&(
                          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )
                      }
                    </AppBar>
                    <AppBar className={classes.appBar} position="static" color="inherit">  
                    <Toolbar className={classes.toolbar}>
                      {user?.result ? (
                        <div className={classes.profile}>
                          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                          <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                          <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                      ) : null}
                    </Toolbar>
                  </AppBar>
                </>
                )
              : (
                <>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <div className={classes.brandContainer}>
                      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                      <img className={classes.image} src={memories} alt="icon" height="60" />
                    </div>
                  </AppBar>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <div>
                      <TextField></TextField>
                      <Button>Search</Button>
                    </div>
                    {
                      !user?.result ? (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                      ):null
                    }
                    <Toolbar className={classes.toolbar}>
                      {user?.result ? (
                        <div className={classes.profile}>
                          <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                          <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                          <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        </div>
                      ) :null}
                    </Toolbar>
                  </AppBar>
                </>)
          }
        }
      </Media>

    </>
  );
};

export default Navbar;