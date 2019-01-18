import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { sizing } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    introDiv: {
    
    }
  });
  
  function Home(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}> 
            <Typography component="h2" variant="display4" gutterBottom>
            NIT-Kkr
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>

            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);