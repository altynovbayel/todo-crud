import React from 'react';
import './Header.scss'
import {Link, useNavigate} from "react-router-dom";
import {RiMenu3Fill} from "react-icons/ri";
import Api from "../../config";

function Header() {
  const [dropDawn, setDropDawn] = React.useState(false)
  const refreshToken = localStorage.getItem('refreshToken')
  const user = localStorage.getItem('accessToken')
  const navigate = useNavigate()
  
  const handleLogout = () => {
    Api.logout(refreshToken).then(() => {
      localStorage.clear()
      navigate('/auth/login')
      setDropDawn(false)
    })
  }
  
  return (
    <div className={dropDawn ? 'header active' : 'header'}>
      <div className='header__container'>
        <Link className='header__title' to={'/'}>
          TODO API
        </Link>
        {
          user &&
          <div className='header__burger'>
            <RiMenu3Fill onClick={() => setDropDawn(prev => !prev)}/>
          </div>
        }
      </div>
      {
        dropDawn &&
        <div className='header__btn'>
          <button
            className='admin__btn'
            onClick={() => {
              navigate('/admin')
              setDropDawn(false)
            }}
          >
            Admin
          </button>
          <button className='signOut__btn' onClick={handleLogout}>Sign out</button>
        </div>
      }
    </div>
  );
}

export default Header;