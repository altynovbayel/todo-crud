// import axios from "axios";
//
// const accessToken = localStorage.getItem('accessToken')
//
// const config = {
//   headers: {
//     'Content-type':'application/json',
//   }
// }
// const headersWithAuth = (accessToken) => {
//   return {
//     headers: {
//       'Content-type':'application/json',
//       'Authorization':`Bearer ${accessToken}`
//     }
//   }
// }
//
// const Api = {
//   register: (data) => axios.post('/registration', data, config),
//   login: (data) => axios.post('/login', data, config),
//   logout: (refreshToken) => axios.post('/logout', refreshToken, config),
//   postTodo: (data, accessToken) => axios.post('/todos/create', data, headersWithAuth(accessToken)),
//   getTodo: (accessToken) => axios.get('/todos',headersWithAuth(accessToken)),
//   editTodo: (id,data) => axios.put(`/todos/${id}`, data, headersWithAuth),
//   completeTodo: (id) => axios.get(`/todos/${id}/completed`, headersWithAuth),
//   deleteTodo: (id) => axios.delete(`/todos/${id}`, headersWithAuth),
//
// }
//
// export default Api