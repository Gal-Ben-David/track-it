import { TodoIndex } from "./pages/TodoIndex"
import { ToastContainer, Slide } from "react-toastify"

function App() {

  return (
    <div className="app-container">
      <TodoIndex />
      <ToastContainer position="top-right" autoClose={3000} transition={Slide} hideProgressBar={false} />
    </div>
  )
}

export default App
