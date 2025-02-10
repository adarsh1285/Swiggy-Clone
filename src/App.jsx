import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Category from './components/category'
import TopRest from './components/TopRest'
import OnlineDelivery from './components/OnlineDelivery'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Category />
      <TopRest/>
      <OnlineDelivery/>
      <Footer/>
    </>
  )
}

export default App
