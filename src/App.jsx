import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  let name = "Rabin"
  let address = "Nepal"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello {name} from {address}</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
