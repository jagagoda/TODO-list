import { Button, Checkbox } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setCheck, removeTodos } from '../../features/todoSlice';

const TodoItem = (props) => {
  const {name, done, id } = props;
  const dispatch = useDispatch()
  const removeTodo = () => {
    dispatch(removeTodos(id))
  }
  const handleCheck = () => {
    dispatch(setCheck(id))
  }
  return (
    <div style={{display: "flex", alignItems: "center", width: "80%", backgroundColor: "white", margin: " 6px 4px", height: "40px", borderRadius: "12px"}}>
      <Checkbox
      checked={done}
      color="primary"
      onChange={handleCheck}
      inputProps={{ 'aria-label' : "secondary checkbox"}}
      />
      <p>{name}</p>
      <Button color="primary">Edit</Button>
      <Button color="secondary" onClick={() => removeTodo}>Delete</Button>
    </div>
  )
}

export default TodoItem