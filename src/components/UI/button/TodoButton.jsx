import classes from './TodoButton.module.css';

function TodoButton({ children, customClassName, ...props }) {
  return (
    <button {...props} className={classes[customClassName]}>{children}</button>
  );
}

export default TodoButton;