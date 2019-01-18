import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    link: {
      margin: 12.5,
      color:'white',
      textDecoration: 'none'
    },
  };

  function Navigation(props) {
    const { classes } = props;
    return (

      <div className={classes.root}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              NITKOSG
            </Typography>
                <NavLink color="inherit" className={classes.link} to="/">Home</NavLink>
                <NavLink color="inherit" className={classes.link} to="/projects">Projects</NavLink>
                <NavLink color="inherit" className={classes.link} to="/events">Events</NavLink>
                <NavLink color="inherit" className={classes.link} to="/tutorials">Tutorials</NavLink>
                <NavLink color="inherit" className={classes.link} to="/members">Members</NavLink>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navigation);

