import React from 'react'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StartButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '30px 35px',
  fontSize: '1.5em',
})
export const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "radial-gradient(circle, rgba(230,237,236,1) 8%, rgba(64,103,87,1) 100%)"
}

const WelcomeScreen = () => {
  const history = useHistory();
  return (
    <div style={styles}>
      <Box borderRadius="25px" width="25%" display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" height="500px" component="div" color="white" bgcolor="palevioletred" p={1}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "3.5em", paddingBottom: "1em" }} >To Do List</h1>
          <h2>organize your life :)</h2>
        </div>
        <StartButton onClick={() => history.push("/list")}>create a list</StartButton>
      </Box>
    </div>

  )
}

export default WelcomeScreen
