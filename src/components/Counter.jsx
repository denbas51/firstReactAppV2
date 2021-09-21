import "../style/App.css"

function Counter({ todos }) {
  return (
    <div>
      <p className="count-title">
        Count of songs: <span className="count"> {todos.length} </span>
      </p>
    </div>
  )
}
export default Counter
