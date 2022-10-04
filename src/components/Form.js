import styles from '.././style.module.css';
import short_id from 'shortid';

const Form = ({ input, set_input, todo_list, set_todolist }) => {
  const handle_change = event => {
    set_input(event.target.value);
  };

  const handle_submit = event => {
    event.preventDefault();
    set_input('');

    if (input.trim()) {
      set_todolist([...todo_list, { name: input.trim(), id: short_id.generate() }]);
    } else {
      console.error('Invaliv input');
    }
  };

  return (
    <div className={styles.w_todo_form}>
      <form onSubmit={handle_submit} className={styles.todo_form}>
        <input className={styles.todo_input} onChange={handle_change} type="text" value={input} placeholder="Todo item" />
        <button className={styles.todo_submit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
