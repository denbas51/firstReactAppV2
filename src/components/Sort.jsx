import TodoButton from "./UI/button/TodoButton"

function Sort({ sortTodos, sortLikes }) {
  const sortDate = (event) => {
    event.preventDefault()
    sortTodos()
  }
  const sortLike = (event) => {
    event.preventDefault()
    sortLikes()
  }
  return (
    <div>
      <TodoButton
        type="submit"
        onClick={sortDate}
        customClassName="TodoCreateButton"
      >
        Sort Date
      </TodoButton>
      <TodoButton
        type="submit"
        onClick={sortLike}
        customClassName="TodoCreateButton"
      >
        Sort Likes
      </TodoButton>
    </div>
  )
}
export default Sort
