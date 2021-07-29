import React from 'react'
import InputTask from '../InputTask';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux'
import { selectTodoList } from '../../features/todoSlice'
import { useParams } from 'react-router';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Paper from '../../assets/paper-texture.jpg';
import '../../font.css';

const font = "'Special Elite', cursive";

const useStyles = makeStyles({
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "radial-gradient(circle, rgba(230,237,236,1) 8%, rgba(64,103,87,1) 100%)"
  },
  container2: {
    textAlign: "center",
    height: "700px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  container3: {
    paddingTop: "15px",
    backgroundImage: `url(${Paper})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    flex: "1",
  },
  h1: {
    fontFamily: font,
    fontSize: "2em",
  },

});

const TODOlistScreen = () => {
  const classes = useStyles();
  const todoList = useSelector(selectTodoList);
  const state = useSelector(state => state);
  const { id } = useParams();

  console.log(state);

  return (
    <Box component="div" className={classes.container1}>
      <Box component="div" className={classes.container2}>
        <Box component="div" className={classes.container3}>
          <Typography component="h1" className={classes.h1}>List</Typography>
          <InputTask />
          {
            todoList.map(item => (
              <TodoItem
                activeId={id}
                name={item.item}
                done={item.done}
                id={item.id}
                key={item.id}
              />
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default TODOlistScreen
