import React from 'react'

const Movie = () => {

    const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const movieTitle = 'Inception';

axios.get(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)  
    .then(response => {
        console.log(response.data);
        console.log(object)
    })
    .catch(error => {
        console.log('Error: ', error);
    });

  return (
    <div>
      
    </div>
  )
}

export default Movie
