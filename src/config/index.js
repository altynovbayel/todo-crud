
const baseUrl = 'https://todo-itacademy.herokuapp.com/api'

const ApiFetch = {
  register: (data) => {
    return fetch(`${baseUrl}/registration`, post(data)).then(res => res.json())
  },
  login: (data) => {
    return fetch(`${baseUrl}/login`, post(data)).then(res => res.json())
  },
  logout: (refreshToken) => {
    return fetch(`${baseUrl}/logout`, post(refreshToken)).then(res => res.json())
  },
  
  postTodo: (data, accessToken) => {
    return fetch(`${baseUrl}/todos/create`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    })
  },
  getTodo: (accessToken) => {
    return fetch(`${baseUrl}/todos`, {
      method: 'GET',
      headers:{
        'Content-type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    }).then(res => res.json())
  },
  
  editTodo: (id, accessToken , data) => {
    return fetch(`${baseUrl}/todos/${id}`, {
      method:'PUT',
      headers:{
        'Content-type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  },
  completeTodo: (id, accessToken) => {
    return fetch(`${baseUrl}/todos/${id}/completed`, {
      method: 'GET',
      headers: {
        'Content-type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    }).then(res => res.json())
  },
  
  deleteTodo: (id, accessToken) => {
    return fetch(`${baseUrl}/todos/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-type':'application/json',
        'Authorization':`Bearer ${accessToken}`
      }
    }).then(res => res.json())
  }
}

function post(data){
  return {
    method: 'POST',
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(data)
  }
}

export default ApiFetch