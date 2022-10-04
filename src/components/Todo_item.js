import styles from '.././style.module.css';

const Todo_item = ({ info, todo_list, set_todolist }) => {
  const handle_done = () => {
    const new_array = todo_list.filter(value => value.id !== info.id);
    set_todolist(new_array);
  };

  return (
    <div>
      <div className={styles.todo_item}>
        <p className={styles.todo_title}>{info.name}</p>
        <button onClick={handle_done} className={styles.todo_delete}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo_item;
