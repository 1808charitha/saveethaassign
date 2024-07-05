import React from 'react'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom'
import HomeComponent from '../routes/HomeComponent/HomeComponent'
import AboutComponent from '../routes/AboutComponent/AboutComponent'
import DepartmentComponent from '../routes/DepartmentComponent/DepartmentComponent'
import EventComponent from '../routes/EventComponent/EventComponent'
import './NavigationComponent.css'

const NavigationComponent = () => {
  return (
    <Router>
      
    <nav>
        <ul className='borderupside'>
          
            <li><Link style={{color: "white"}} to='/' >Home</Link></li>
            <li><Link  style={{color: "white"}}to='/about' >About</Link></li> 
            <li><Link  style={{color: "white"}}to='/department' >Departments</Link></li>
            <li><Link  style={{color: "white"}}to='/event' >Events</Link></li>

        </ul>
    </nav>
   
    <Routes>
      <Route exact path='/' element={<HomeComponent/>}></Route>
      <Route exact path='/about' element={<AboutComponent/>}></Route>
      <Route exact path='/department'element={<DepartmentComponent/>}></Route>
      <Route exact path='/event'element={<EventComponent/>}></Route>

    </Routes>
    </Router>
     
    
  )
}

export default NavigationComponent