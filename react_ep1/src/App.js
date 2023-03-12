
import './App.css';
import { User } from './User.js';
import { useState } from "react";
import { Task } from "./Task.js";

function App() {
  //use array to trak todo list
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  //const [textColor, setTextColor] = useState("black");
  //event is what happens when getting input from user
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      //check if length is 0 aka no task
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    if (newTask !== "") {
      setTodoList([...todoList, task]);
    }
  };

  const deleteTask = (id) => {
    //filter loops through the array and delete matches
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        console.log(task);
        if (task.id === id) {
          return { ...task, completed: true };
        }
        else {
          return task;
        }
        console.log(task);
      })
    );
  };


  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}></input>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></Task>
          );
        })}
      </div>

    </div >
  );
}

//not a component
const getName = () => {
  return "Ruby";
};

//component, must start with capital letter
const GetNameComponent = () => {
  return <h1>Ruby</h1>;
};




export default App;
