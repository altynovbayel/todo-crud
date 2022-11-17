import './App.css';
import Layout from "./pages/Layout";
import axios from "axios";

axios.defaults.baseURL = 'https://todo-itacademy.herokuapp.com/api'

function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
