import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import Footer from './MyComponent/Footer';
import Todos from './MyComponent/Todos';
import TodoItem from './MyComponent/TodoItem';
import Addtodo from './MyComponent/addtodo';
import React, { useEffect, useState } from 'react';



function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("onDelete called with todo:", todo);
    // Deleting this way does not work in react because we are not supposed to change the state directly. 
    // let index = todos.indexOf(todo);
    // if (index !== -1) {
    //   todos.splice(index, 1);
    //   console.log("Todo deleted successfully");
    // }
    setTodos(todos.filter(t => t.sno !== todo.sno));
    localStorage.setItem("todos", JSON.stringify(todos));

  }
  const addtodo = (title, desc) => {
    console.log("Adding todo with title:", title, "and description:", desc);
    let sno = todos.length + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchbar={false} />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
