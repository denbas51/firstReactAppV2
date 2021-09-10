import { useState } from "react"
import AddNewTodo from "./components/AddNewTodo"
import FormList from "./components/FormList"
import { songs } from "./data/songs"
import "./style/App.css"

function App() {
  const [todos, setTodos] = useState(songs)

  const generateId = () => {
    if (!todos.length) {
      return 1
    }
    return todos[todos.length - 1].id + 1
  }
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const addLike = (isLike) => {
    setTodos([
      ...todos.map((todo) =>
        todo.isLike === isLike ? { ...todo, isLike: !todo.isLike } : { ...todo }
      ),
    ])
  }
  return (
    <div className="App">
      <h2>Playlist</h2>
      <AddNewTodo addTodo={addTodo} generateId={generateId} />
      <FormList todos={todos} deleteTodo={deleteTodo} addLike={addLike} />
      <p class="count-title">
        Count of songs: <span class="count"> {todos.length} </span>
      </p>
    </div>
  )
}

export default App
