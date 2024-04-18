import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Admin from './pages/admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Admin/>
    </>
  )
}

export default App
