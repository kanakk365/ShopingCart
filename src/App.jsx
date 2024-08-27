
import { Routes ,Route } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home"
import Cart from './Pages/Cart'
import Header from './components/Header/Header'

function App() {
  

  return (
   <div>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
   </div>
  )
}

export default App
