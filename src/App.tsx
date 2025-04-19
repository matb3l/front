import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import api from './api/axios'




function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    api.get('/projects').then((res) => {
      console.log(res)
    })
  },[])

  return (
    <BrowserRouter>
      <Router>
        <Route path='/registration' element={Registration}
      </Router>
    </BrowserRouter>
  )
}

export default App
