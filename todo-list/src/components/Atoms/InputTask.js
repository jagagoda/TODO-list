import { Button, Input } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'

const InputTask = () => {
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
    <div className="input">
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={addTodo}>+</Button>
    </div>
  )
}

export default InputTask
