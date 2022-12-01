import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [photo, setPhoto] = useState("")
  const [result, setResult] = useState([])


  const changePhoto = () => {
      axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=GrLthNqqcnWLrEsOwC3D8XoOaxEHHtdkeyRfjF6cQ0I`)
          .then((response) => {
              console.log(response.data);
              setResult(response.data.results);
          })
          
  }
  return(
    <>
    <div className='container'>
      <h1>React Photo Search</h1>
      <nav>BookMark</nav>
      <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} placeholder="Search free image" />
      <button type='submit' onClick={changePhoto}>Search</button>
    </div>
    <div className="container">
                <div className='row'>
                    {result.map((value) => {
                        return (
                            <div className='col'>
                                    <img className="img" src={value.urls.small} alt='' />
                            </div>
                        )
                    })}
                </div>
              
    </div>
    </>
  )
}

export default App;
