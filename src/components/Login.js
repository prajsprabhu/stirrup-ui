import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username === '' || password === '') {
      console.log(`err`)
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      console.log(`username:${username}`)
      console.log(`password:${password}`)

      const login = {
        username: username,
        password: password,
      }
      console.log(login)
      const res = await axios.post(
        'http://192.168.2.123:7001/sessions',
        login,
        config
      )
      console.log(res.data)
      if (res.data.loginSuccess) {
        console.log('true')
        setLoginSuccess(true)
        console.log(loginSuccess)
      } else {
        setLoginSuccess(false)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password</label>
        <input type='text' onChange={(e) => setPassword(e.target.value)} />
        <br />
        {loginSuccess ? <Redirect to='/recipes' /> : null}

        <button type='submit'>Login</button>
        <br />
        <Link to='/register'>
          <button type='button'>Signup</button>
        </Link>
      </form>
    </div>
  )
}

export default Login
