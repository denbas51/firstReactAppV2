import TodoButton from "./UI/button/TodoButton"

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
      <TodoButton onClick={() => addLike(todo.isLike)}>
        {todo.isLike ? "Like" : "Unlike"}
      </TodoButton>
    </div>
  )
}
export default TodoItem
