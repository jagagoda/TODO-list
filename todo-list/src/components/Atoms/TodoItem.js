import { Button, Checkbox, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCheck, removeTodos, editTodo } from '../../features/todoSlice';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    width: "80%",
    backgroundColor: "white",
    margin: "6px 4px",
    height: "40px",
    borderRadius: "12px"
  },
  p: props => ({
    backgroundColor: props.done ? 'red' : 'white'
  })
});

const TodoItem = (props) => {
  const {name, done, id, activeId} = props;
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

    if(which === 13) {
      dispatch(editTodo({id, newName}));
      push('/list');
    }
  }

  return (
    <div className={classes.container}>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label' : "secondary checkbox"}}
      />

      { parseInt(activeId) !== parseInt(id) &&
        <p
          className={classes.p}
        >{name}</p>
      }

      {parseInt(activeId) === parseInt(id) &&
        <input
          name='name'
          value={newName}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      }

      <Link to={`/list/${id}/edit`}>
        <Button color="primary">Edit</Button>
      </Link>
      <Button color="secondary" onClick={() => removeTodo()}>Delete</Button>
    </div>
  )
}

export default TodoItem