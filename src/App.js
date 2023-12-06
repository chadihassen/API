import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Userlist from './components/Userlist';

function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setusers(res.data));
  }, []);
  
  return (
  <div>
    <Userlist users={users}/>
  </div>
  );
}

export default App;
