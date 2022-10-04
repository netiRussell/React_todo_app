import Todo_item from './Todo_item';

const Todo_list = ({ todo_list, set_todolist }) => {
  return (
    <div>
      {todo_list.map(value => (
        <Todo_item todo_list={todo_list} set_todolist={set_todolist} key={value.id} info={value}></Todo_item>
      ))}
    </div>
  );
};

export default Todo_list;
