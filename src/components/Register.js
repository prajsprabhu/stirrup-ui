import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [registerSuccess, setRegisterSuccess] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (username === '' || password === '' || email === '' || contact === '') {
      console.log(`error`)
    } else {
      console.log(`username:${username}`)
      console.log(`password: ${password}`)
      console.log(`email:${email}`)
      console.log(`contact:${contact}`)
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const register = {
      username: username,
      password: password,
      email: email,
      contact: contact,
    }

    const res = await axios.post(
      'http://192.168.2.123:7001/users',
      register,
      config
    )
    if (res.data.registerSucess) {
      setRegisterSuccess(true)
      console.log('Registration Success')
    } else {
      setRegisterSuccess(false)
      console.log(res.data.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type='text'
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <label>Email</label>
        <input type='text' onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label>Contact</label>
        <input
          type='text'
          onChange={(event) => setContact(event.target.value)}
        />
        <br />
        {registerSuccess ? <Redirect to='/login' /> : null}

        <button type='submit'>Register</button>
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Register
