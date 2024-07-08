import Home from "./components/Home/Home"
import AddRoom from "./components/Room/AddRoom"
import EditRoom from "./components/Room/EditRoom"
import ExitingRoom from "./components/Room/ExistingRoom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/edit-room/:roomId" element={<EditRoom/>} />
            <Route path="/existing-room" element={<ExitingRoom/>} />
            <Route path="/add-room" element={<AddRoom/>} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
