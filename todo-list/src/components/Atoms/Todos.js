import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { useRef } from 'react';
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos } from '../../features/todoSlice';

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj))

  }
}
const Todos = (props) => {
  const { updateTodo, addTodo, todos, removeTodo } = props;
  const [todo, setTodo] = useState('');
  const inputRef = useRef(true);

const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  console.log("todo text", todo)
  return (
    <div>
      <Input onChange={(e) => handleChange(e)} />
      <Button onClick={() => addTodo({ id: Math.floor(Math.random() * 1000), item: todo, done: false })}>+</Button>
      <ul>
        {todos.map(item => {
          return (
            <div key={item.id}>
              <textarea
                ref={inputRef}
                disabled={inputRef}
                defaultValue={item.item}
                onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
              <Button color="primary" onClick={() => changeFocus()}>Edit</Button>
              <Button color="secondary" onClick={() => removeTodo(item.id)}>Delete</Button>
            </div>
          );
        })}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
