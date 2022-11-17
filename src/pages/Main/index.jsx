import React from 'react';
import TodoCard from "../../components/TodoCard";
import Api from "../../config";
import {Link} from "react-router-dom";
import './Main.scss'


function Main() {
  const [base, setBase] = React.useState('')
  const accessToken = localStorage.getItem('accessToken')
  
  const getTodos = () => {
    Api.getTodo(accessToken).then(r => r.todos && setBase(r.todos))
  }
  React.useEffect(() => {
    getTodos()
  }, [])
  
  if (base.length === 0) return <Link to={'/admin'}>Go to admin page</Link>
  return (
    <div className='main'>
      <h3 className='count'>
        Count: {base.length}
      </h3>
      {
        base &&
        base.map((item, id) => (
          <TodoCard key={id} {...item} get={getTodos}/>
        ))
      }
    </div>
  );
}

export default Main;