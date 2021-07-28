import React from 'react'
import { styles } from './WelcomeScreen';
import InputTask from '../Atoms/Input';
import TodoItem from '../Atoms/TodoItem';
import { useSelector } from 'react-redux'
import { selectTodoList } from '../../features/todoSlice';

const TODOlistScreen = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div style={styles}>
      <div style={{ height: "700px", width: "500px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", padding: "20px" }} className="list__container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", flex: "1" }} className="taskList__container">
          <InputTask />
          {
            todoList.map(item => (
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default TODOlistScreen
