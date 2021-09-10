import React from "react"
import classes from "./TodoInput.module.css"

const TodoInput = (props) => {
  return <input {...props} className={classes.todo__input} />
}

export default TodoInput
