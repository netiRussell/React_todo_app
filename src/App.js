import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import Todo_list from './components/Todo_list';

function App() {
  const [input, set_input] = useState('');
  const [todo_list, set_todolist] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Form input={input} set_input={set_input} todo_list={todo_list} set_todolist={set_todolist}></Form>
      <Todo_list set_todolist={set_todolist} todo_list={todo_list}></Todo_list>
    </div>
  );
}

export default App;
