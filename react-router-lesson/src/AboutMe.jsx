import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutMe() {
  let navigate = useNavigate()
  return (
    <div>
      <h1>AboutMe
        </h1>
        <ul>
          <li>Use Navigate allows us to re-render another component w/o full page re-render</li>
          <li>useNavigate same as useHistory in Router v5</li>
        </ul>
        <ol>
          <li>import useNavigate from react-router-dom</li>
          <li>assign useNavigate() method to a variable</li>
          <li>use navigate ("/endpoint") to specify destination</li>
          <li>navigate() must be used in callback fxn inside an event (onClick, onChange, etc...) </li>
        </ol>
        <button onClick={() => navigate('/')}>Pants</button>
        </div>
  )
}

export default AboutMe