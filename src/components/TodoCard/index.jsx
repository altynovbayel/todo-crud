import React from 'react';
import {AiFillCheckCircle, AiTwotoneDelete} from "react-icons/ai";
import {FaEdit} from "react-icons/fa";
import './Card.scss'
import Api from "../../config";

function TodoCard({title, content, date, id, completed, edited ,get}) {
  const [editActive, setEditActive] = React.useState(false)
  const [newTitle, setNewTitle] = React.useState('')
  const [newContent, setNewContent] = React.useState('')
  
  const accessToken = localStorage.getItem('accessToken')
  
  const handleEdit = (id) => {
    Api.editTodo(id, accessToken, {
      title: newTitle.length === 0 ? title : newTitle,
      content: newContent.length === 0 ? content : newContent,
    }).then(r => r && get())
  }
  
  const handleComplete = (id) => {
    Api.completeTodo(id, accessToken).then(r => r && get())
  }
  
  const handleDelete = (id) => {
    Api.deleteTodo(id,accessToken).then(r => r && get())
  }
  
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__header'>
          <p className='card__date'>
            <span>{date}</span>
            <span>Edited: {edited.date.slice(0, 10)}</span>
          </p>
          
          <h3>{title}</h3>
  
          {
            completed &&
            <AiFillCheckCircle/>
          }
        </div>
        <p className='card__text'>
          {content}
        </p>
        {
          editActive &&
          <div className='edit__inputs'>
            <input type="text" placeholder='title' onChange={e => setNewTitle(e.target.value)}/>
            <input type="text" placeholder='content' onChange={e => setNewContent(e.target.value)}/>
            <div className='change_btn' >
              <button onClick={() => {
                handleEdit(id)
                setEditActive(false)
              }}>Edit</button>
            </div>
          </div>
        }
      </div>
      <div className='card__btn'>
        <button
          className='delete__btn'
          onClick={() => handleDelete(id)}
        >
          <AiTwotoneDelete/>
        </button>
        <button
          className='complete__btn'
          onClick={() => handleComplete(id)}
        >
          <AiFillCheckCircle/>
        </button>
        <button
          className='edit__btn'
          onClick={() => setEditActive(prev => !prev)}
        >
          <FaEdit/>
        </button>
      </div>
    </div>
  );
}

export default TodoCard;