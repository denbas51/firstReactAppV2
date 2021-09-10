import TodoItem from "./TodoItem"

function FormList({ todos, deleteTodo, addLike }) {
  return (
    <div>
      {todos.length ? (
        <div>
          {todos.map((todoItem) => (
            <TodoItem
              todo={todoItem}
              deleteTodo={deleteTodo}
              addLike={addLike}
              key={todoItem.id}
            />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Not Found Any Song</h1>
      )}
    </div>
  )
}

export default FormList
