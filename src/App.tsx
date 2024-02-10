import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Home from './components/Home'

function App() {
  const [data,setData] = useState<{isVerified:boolean}>({isVerified:false})
  return (!data.isVerified) ? <Form setData={setData}/> : <Home/>
}

export default App
