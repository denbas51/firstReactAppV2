import { useState, useContext } from "react"
import React, { Component, PropTypes } from "react"
import AddNewTodo from "./components/AddNewTodo"
import FormList from "./components/FormList"
import Counter from "./components/Counter"
import { songs } from "./data/songs"
import "./style/App.css"
import SearchTodos from "./components/SearchTodos"
import Sort from "./components/Sort"

export const TodoContext = React.createContext()

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

  const addLike = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isLike: !todo.isLike } : { ...todo }
      ),
    ])
  }

  const sortTodos = () => {
    setTodos([
      ...todos.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      ),
    ])
  }
  const sortLikes = () => {
    setTodos([...todos.sort((a, b) => a.isLike - b.isLike)])
  }

  return (
    <div className="App">
      <h2>Playlist</h2>
      <AddNewTodo addTodo={addTodo} generateId={generateId} />

      <hr />
      <SearchTodos todos={todos} setTodos={setTodos} />
      <TodoContext.Provider value={() => {}}>
        <FormList todos={todos} deleteTodo={deleteTodo} addLike={addLike} />
      </TodoContext.Provider>
      <Counter todos={todos} />
      <Sort sortTodos={sortTodos} sortLikes={sortLikes} />
    </div>
  )
}

export default App
