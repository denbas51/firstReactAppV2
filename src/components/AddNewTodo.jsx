import { useState } from "react"
import TodoButton from "./UI/button/TodoButton"
import TodoInput from "./UI/input/TodoInput"

function AddNewTodo({ addTodo, generateId }) {
  const [todo, setTodo] = useState({
    name: "",
    author: "",
    releaseDate: "",
    albumName: "",
    isLike: false,
  })

  const addNewTodo = (event) => {
    event.preventDefault()

    const newTodo = {
      ...todo,
      id: generateId(),
    }

    addTodo(newTodo)
  }

  return (
    <form className="create__item">
      <TodoInput
        type="text"
        value={todo.name}
        name="name"
        placeholder="Select name"
        onChange={(event) => setTodo({ ...todo, name: event.target.value })}
      />
      <TodoInput
        type="text"
        value={todo.author}
        name="author"
        placeholder="Select author"
        onChange={(event) => setTodo({ ...todo, author: event.target.value })}
      />
      <TodoInput
        type="text"
        value={todo.releaseDate}
        name="releaseDate"
        placeholder="Select releaseDate"
        onChange={(event) =>
          setTodo({ ...todo, releaseDate: event.target.value })
        }
      />
      <TodoInput
        type="text"
        value={todo.albumName}
        name="albumName"
        placeholder="Select albumName"
        onChange={(event) =>
          setTodo({ ...todo, albumName: event.target.value })
        }
      />
      <TodoButton
        type="submit"
        onClick={addNewTodo}
        customClassName="TodoCreateButton"
      >
        Create Todo
      </TodoButton>
    </form>
  )
}

export default AddNewTodo
