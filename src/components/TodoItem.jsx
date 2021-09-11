import TodoButton from "./UI/button/TodoButton"
import "./images/like.svg"

function TodoItem({ todo, deleteTodo, addLike }) {
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
        {todo.isLike ? "Like" : "Unlike"}
      </TodoButton>
      <div className="setLike">
        {todo.isLike ? (
          <img src="./images/like.svg" alt="" width="30px" height="30px" />
        ) : null}
      </div>
    </div>
  )
}
export default TodoItem
