import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { InputField } from './components/InputField';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('')  
};

  // const removeTodo = (todoId) => {
  //   setTodos(todos.filter((todo) => todo.id !== todoId));
  // };
  // const toggleTodoComplete = (todoId) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id !== todoId) return todo;
  //       return {
  //         ...todo,
  //         completed: !todo.completed,
  //       };
  //     }),
  //   );
  // };
  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
