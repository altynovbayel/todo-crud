import React from 'react';
import './Admin.scss'
import {Link} from "react-router-dom";
import Api from "../../config";

function Admin() {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [date, setDate] = React.useState('')
  const accessToken = localStorage.getItem('accessToken')
  
  function handlePost(){
    Api.postTodo({title, content, date},accessToken).then()
  }
 
  return (
    <div className='admin__container'>
      <div className='admin__form'>
        <h3>Admin</h3>
        <hr/>
        <form>
          <input
            type="text"
            placeholder='Title *'
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder='Content *'
            onChange={e => setContent(e.target.value)}
          />
          <input
            type="date"
            onChange={e => setDate(e.target.value)}
          />
          <button
            className='admin__form-btn'
            onClick={e => {
              e.preventDefault()
              handlePost()
            }}
          >
            Add Todo
          </button>
          <Link to={'/'} >Home</Link>
        </form>
      </div>
    </div>
  );
}

export default Admin;