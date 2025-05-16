import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import LearningUseEffect from "./LearningUseEffect"
function App() {
  // let name = "Rabin"
  // let address = "Nepal"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/useeffect" element={<LearningUseEffect/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
