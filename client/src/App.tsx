import "./App.css"
import TaskProvider from "./components/context/fetchTasksContext"
import { Home } from "./page/Home"


function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  )
}

export default App
