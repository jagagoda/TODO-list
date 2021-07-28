import React from 'react'
import { styles } from './WelcomeScreen';
import InputTask from '../Atoms/InputTask';
import TodoItem from '../Atoms/TodoItem';
import { useSelector } from 'react-redux'
import { selectTodoList } from '../../features/todoSlice';
import { useParams } from 'react-router';

const TODOlistScreen = () => {
  const todoList = useSelector(selectTodoList);
  const state = useSelector(state => state);
  const { id } = useParams();

  console.log(state);

  return (
    <div style={styles}>
      <div style={{ height: "700px", width: "500px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", padding: "20px" }} className="list__container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", flex: "1" }} className="taskList__container">
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

        </div>
      </div>
    </div>
  )
}

export default TODOlistScreen
