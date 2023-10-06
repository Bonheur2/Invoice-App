import { useState } from 'react'
import './index.css'
import Invoice from './components/Invoice'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Invoice />
    </>
  )
}

export default App
