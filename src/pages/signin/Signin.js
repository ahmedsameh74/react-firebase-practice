import { useState } from 'react'
// import { useSignin } from '../../hooks/useSignin'
import './Signin.css'
import { useLogin } from './../../hooks/useLogin';

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, isPending, error} = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }


  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign in</h2>
      <label>
        <span>email:</span>
        <input
         type="email"
         onChange= {(e) => setEmail(e.target.value)}
         required
         value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
         type="password"
         onChange={(e) => setPassword(e.target.value)}
         required
         value={password}
        />
      </label>
      {!isPending && <button className="btn">Sign in</button>}
      {isPending && <button className="btn" disabled>loading...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
