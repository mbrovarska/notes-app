import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUpPage from './pages/sign_up_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <SignUpPage/>
    </>
  )
}

export default App
