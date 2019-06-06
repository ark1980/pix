import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    color: '#342E37'
  },
  title: {
    flexGrow: 1,
  }
}))

const NavBar = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PIX
          </Typography>
        </Toolbar>
      </AppBar>
    </div> 
  )
}

export default NavBar;