import React from 'react'
import './HomeComponent.css'
import Saveethapic from '../../../assets/Saveethapic.jpg'



const HomeComponent = () => {
  return (
   
    <React.Fragment>
    <div><h1>Welcome To Our College</h1></div>
    <p>Your Future Starts here.Learn more about our programs and events</p>
    <img src={Saveethapic} alt="pic"/>
    </React.Fragment>
  )
}

export default HomeComponent