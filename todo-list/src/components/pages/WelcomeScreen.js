import React from 'react'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import Cover from '../../assets/cover1.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const StartButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(64,103,87,1) 26%, rgba(189,221,216,1) 100%)",
  border: 0,
  borderRadius: 50,
  color: "#ffffff",
  height: 48,
  padding: '30px 30px',
  fontSize: '1.5em',
  textTransform: "lowercase",
  '&:hover': {
    boxShadow: "-2px 2px 8px 2px rgb(0, 0, 0)",
  }
});

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "radial-gradient(circle, rgba(189,221,216,1) 2%, rgba(64,103,87,1) 74%)"
  },
  box: {
    borderRadius: "12px 2px 2px 12px",
    width: "500px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    height: "700px",
    color: "#ffffff",
    backgroundImage: `url(${Cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    p: "{ 1}"
  },
  h1: {
    fontSize: "3.5em",
    paddingBottom: "1em",
    paddingTop: "30px",
  },
  h2: {
    fontSize: "1.5em",
    textAlign: "center",
  },
});

const WelcomeScreen = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.container}>
      <Box p={1} className={classes.box}>
        <Box component="div">
          <Typography component="h1" className={classes.h1}>TO DO list</Typography>
          <Typography component="h2" className={classes.h2}>organize your day!</Typography>
        </Box>
        <StartButton onClick={() => history.push("/list")}>start<ArrowForwardIcon fontSize="large" style={{ marginLeft: "10px" }} /></StartButton>
      </Box>
    </div>

  )
}

export default WelcomeScreen
