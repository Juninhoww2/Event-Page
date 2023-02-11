import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home from './pages/Home'
import About from './pages/About'
import PreviousEvents from './pages/PreviousEvents'
import './App.css' 

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/previousevents" element={<PreviousEvents />} />
    </Routes>
    </>
  )
}

export default App
