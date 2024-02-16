import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './features/todos/todoSlice'

export default function App() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addTodo(text))
    setText('')
  }

  const handleToggle = (id) => {
    dispatch(toggleTodo(id))
  }

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center font-thin text-lg md:text-2xl lg:text-3xl">
      <p className="text-3xl md:text-4xl lg:text-5xl m-2 md:m-5 text-neon-mint text-center">
        Todo List
      </p>
      <div className="bg-neon-purple p-10 mx-auto max-w-md rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between space-x-2 m-2"
        >
          <input
            className="bg-neon-navy text-neon-white placeholder-neon-white rounded-lg p-2 w-full outline-none"
            placeholder="Todo..."
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button className="hover:opacity-50 active:opacity-100 text-neon-mint">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 md:w-7 md:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </form>

        <ul className="text-neon-white text-lg md:text-2xl">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="capitalize shadow-md shadow-neon-mint rounded-md p-2 md:p-4 flex m-1 md:m-3"
            >
              <button
                onClick={() => handleToggle(todo.id)}
                className="mr-3 hover:opacity-50 active:opacity-100 text-neon-mint"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
              </button>
              <p className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
                {todo.text}
              </p>
              <button
                onClick={() => handleDelete(todo.id)}
                className="hover:opacity-50 active:opacity-100 text-neon-mint"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-7 md:h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
