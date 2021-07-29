import { Box, Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
import { makeStyles } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';

const font = "'Special Elite', cursive";

const useStyles = makeStyles({
  btn: {
    fontSize: "2em",
    background: "transparent",
    margin: "10px",
    border: "0.5px solid transparent",
    padding: "5px",
    borderRadius: 0,
    marginLeft: "30px",
    '&:hover': {
      background: "transparent",
      boxShadow: "7px 3px 3px black",
      border: "0.5px solid black"
    },
    input: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: font,
    }
  }
})
const InputTask = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodo = () => {
    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }
  return (
    <Box className={classes.input}>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button className={classes.btn} onClick={addTodo}><CheckIcon fontSize="large" /></Button>
    </Box>
  )
}

export default InputTask
