import { useState } from 'react'
import MainSite from './pages/MainSite'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainSite />} />
    <Route path="*" element={<NotFound />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
