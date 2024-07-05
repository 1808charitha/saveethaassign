import React from 'react'
import NavigationComponent from './Components/NavigationComponent/NavigationComponent'
import HomeComponent from './Components/routes/HomeComponent/HomeComponent'
import EventComponent from './Components/routes/EventComponent/EventComponent'
import DepartmentComponent from './Components/routes/DepartmentComponent/DepartmentComponent'
import AboutComponent from './Components/routes/AboutComponent/AboutComponent'
import './App.css'


const App = () => {
  return (
    <React.Fragment>
      <NavigationComponent/>
      
      <footer className="footer">
        © 2024 Saveetha Engineering College. All rights reserved.
      </footer>
      </React.Fragment>
   
  )
}

export default App