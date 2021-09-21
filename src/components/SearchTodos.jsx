import { useState, useMemo, useEffect } from "react"
import TodoInput from "./UI/input/TodoInput"

function SearchTodos({ todos, setTodos }) {
  const [query, setQuery] = useState("")
  const filteredArray = useMemo(() => {
    return query
      ? todos.filter((todo) =>
          todo.name.toLowerCase().includes(query.toLowerCase())
        )
      : todos
  }, [query])

  useEffect(() => {
    setTodos(filteredArray)
  }, [query])

  return (
    <TodoInput
      placeholder="Search"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
  )
}
export default SearchTodos
