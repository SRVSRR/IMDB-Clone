import { useEffect } from 'react'
import './App.css'
//3619e537

const API_URL = 'http://www.omdbapi.com?apikey=3619e537';
const App = () => {
  const searchMovies = async (title)=>{
    const response = await fetch('$(API_URL)&s=${title}');
    const data = await response.json();

    console.log(data.search);
  }
  useEffect(()=>{
    searchMovies('Spiderman');
  },[]);
  return (
    <div className='App'>
      <h1>MovieLand</h1>
    </div>
  );
}

export default App
