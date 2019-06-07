import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import heroBackground from '../images/heroBackground.jpg';

const useStyles = makeStyles(theme => ({
  heroImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `#F8F7F4 url("${heroBackground}") center no-repeat`,
    width: "100%",
    height: "70vh",
    marginTop: "20px",
    backgroundSize: "cover",
  },
  text: {
    
  }
}));

const Hero = () => {
  const classes = useStyles();
  return(
    <div className={classes.heroImage} >
      <Typography className={classes.text}>
        <Box fontSize="h3.fontSize" fontWeight="500">
          Pix
        </Box>
        <Box fontWeight="fontWeightRegular">
          Beautiful, free photos.<br />
          Gifted by the world’s most generous community of photographers.
        </Box>
      </Typography>
    </div>
  )
}

export default Hero;