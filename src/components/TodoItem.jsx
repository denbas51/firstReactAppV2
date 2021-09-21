import { useContext } from "react"
import TodoButton from "./UI/button/TodoButton"
import like from "../images/like.svg"
import { TodoContext } from "../App"

function TodoItem({ todo, deleteTodo, addLike }) {
  const value = useContext(TodoContext)
  return (
    <div key={todo.id} className="item-todo">
      <strong>
        {todo.id}: {todo.name}
      </strong>
      <p>Author: {todo.author}</p>
      <p>Release date: {todo.releaseDate}</p>
      <p>Album: {todo.albumName}</p>
      <TodoButton onClick={() => deleteTodo(todo.id)}>Delete</TodoButton>
      <TodoButton onClick={() => addLike(todo.id)}>
        {todo.isLike ? "Unlike" : "Like"}
      </TodoButton>
      <div className="setLike">
        {todo.isLike ? (
          <img src={like} alt="" width="30px" height="30px" />
        ) : null}
      </div>
    </div>
  )
}
export default TodoItem
