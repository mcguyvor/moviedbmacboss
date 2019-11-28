import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [state,setState]=useState([]);
  useEffect(async()=>{
      const fetch = await axios.get('https://movie-mb-api.herokuapp.com/home');
      const data = fetch.data;
      setState(data);
  },[])
  return (
    <div className="App">
        
    </div>
  );
}

export default App;
