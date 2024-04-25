import { useState } from 'react'
import './App.css'

const Person = () => {
  return(
    <>
    <h1>John</h1>
    <h2>Smith</h2>
    <h2>30</h2>
    </>
  )
}

const App = () => {
  const isUserLoggedIn = true;

  return (
    <div className='App'>
      g
   <Person/>
    </div>
  )
}

export default App
