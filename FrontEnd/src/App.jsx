import React from 'react'
import Nav from './Components/Nav'
import AddNote from './Components/AddNote'
import AllTasks from './Components/AllTasks'

function App() {
  return (
    <div>
      <Nav/>
      <div className='mt-10'>
      <AddNote/>

      </div>
      <div className='mt-10'>
      <AllTasks/>

      </div>
      
    </div>
  )
}

export default App
