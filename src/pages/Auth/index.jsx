import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Api from "../../config";
import './Auth.scss'

function Auth() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const navigate = useNavigate()
  
  function loginUser(){
    if(email !== '' && password !== ''){
      Api.login({email, password}).then(r => {
        if(r.accessToken){
          setError('')
          localStorage.setItem('accessToken', r.accessToken)
          localStorage.setItem('refreshToken', r.refreshToken)
          localStorage.setItem('user' , JSON.stringify(r.user))
          if(r.user.isActivated){
            localStorage.setItem('isActivated' , r.user.isActivated)
          }
          navigate('/')
        }
        if(r.message){
          setError(r.message)
        }
      })
    }
  }
  
  
  
  return (
    <div className='container'>
      <div className='register_card'>
        <h4>Authorization</h4>
        <hr />
        <form>
          <div>
            <input
              type='email'
              placeholder='Email *'
              defaultValue={email}
              onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <input
              type='password'
              placeholder='Password *'
              defaultValue={password}
              onChange={e => setPassword(e.target.value)} />
          </div>
        </form>
        {
          error &&
          <div className='error__message'>
            <p>
              {error}
            </p>
          </div>
        }
        <div className='register_btn'>
          <button className='btn_primary' onClick={loginUser}>Authorization</button>
        </div>
      
        <div className='link_auth'>
          <Link to='/auth/register'>Create a new  account</Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;