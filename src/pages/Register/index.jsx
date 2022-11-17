import React from 'react';
import {Link} from "react-router-dom";
import './Register.scss'
import Api from "../../config";

function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [alert, setAlert] = React.useState(false)
  function postUser(){
    Api.register({
      email,
      password
    }).then(r => {
      if(r.accessToken){
        setAlert(true)
        setError('')
        
        localStorage.setItem('accessToken', r.accessToken)
        localStorage.setItem('refreshToken', r.refreshToken)
        localStorage.setItem('isActivated' , r.user.isActivated)
        localStorage.setItem('user' , JSON.stringify(r.user))
      }
      if(r.message){
        console.log(r)
        setError(r.message)
        setAlert(false)
      }
    })
  }
  
  console.log(error)
  return (
    <div className='container'>
      <div className='register_card'>
        <h4>Registration</h4>
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
        <div className='alert__message'>
          {
            alert &&
            <>
              <p>На вашу почту отправлено, ссылка на активацию аккаунта</p>
              <span>Прежде чем перейти на Главную, активируйте аккаунт</span>
            </>
          }
          {
            error.length > 0 &&
            <p className='error__message'>
              {error}
            </p>
          }
        </div>
        <div className='register_btn'>
          <button className='btn_primary' onClick={postUser}>Registration</button>
        </div>
        <div className='link_auth'>
          <Link to='/auth/login'>Have already an account?</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;