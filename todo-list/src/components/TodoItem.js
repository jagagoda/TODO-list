import { Box, Button, Checkbox, makeStyles, Typography, Input } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCheck, removeTodos, editTodo } from '../features/todoSlice';
import { Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const font = "'Special Elite', cursive";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    backgroundColor: "transparent",
    margin: "6px 4px",
    height: "40px",
    borderRadius: "12px",
    textAlign: "center",
    paddingTop: "3em"
  },
  p: props => ({
    textDecoration: props.done ? 'line-through' : 'none',
    fontFamily: font,
    textTransform: "uppercase",
    fontSize: "1.2em",
    padding: "12px"
  }),
  task: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
  }
});

const TodoItem = (props) => {
  const { name, done, id, activeId } = props;
  const classes = useStyles({ done });
  const { push } = useHistory();
  const [newName, setNewName] = useState(name);
  const dispatch = useDispatch()
  const removeTodo = () => {
    dispatch(removeTodos(id))
  }
  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  const onChange = e => {
    const { target } = e;
    const { value } = target;

    setNewName(value);
  }

  const onKeyPress = e => {
    const { which } = e;

    if (which === 13) {
      dispatch(editTodo({ id, newName }));
      push('/list');
    }
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.task}>
        <Checkbox
          checked={done}
          color="default"
          onChange={handleCheck}
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />

        {parseInt(activeId) !== parseInt(id) &&
          <Typography style={{ fontFamily: font }} component="p"
            className={classes.p}
          >{name}</Typography>
        }

        {parseInt(activeId) === parseInt(id) &&
          <Input
            className={classes.input}
            name='name'
            value={newName}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        }
      </Box>
      <Box>
        <Link to={`/list/${id}/edit`}>
          <Button><EditIcon /></Button>
        </Link>
        <Button color="secondary" onClick={() => removeTodo()}><DeleteIcon /></Button>
      </Box>
    </Box>
  )
}

export default TodoItem