/// src/components/BuscadorPeliculas.jsx

import React, { useState, useMemo } from 'react';
// Importa tus datos locales
import { moviesData } from '../dataset/movies'; 

import logoEE from './../assets/logoViejo.png';

const BuscadorPeliculas = () => {
  const [query, setQuery] = useState('');
  
  // No necesitamos 'fetch', 'loading' ni 'setMovies' porque los datos son locales

  // Usamos useMemo para recalcular las películas filtradas solo cuando 'query' cambia
  const filteredMovies = useMemo(() => {
    if (query.trim() === '') {
      return moviesData; // Muestra todas las películas si el input está vacío
    }
    
    // Filtra los datos locales
    return moviesData.filter(movie => {
      // Busca la coincidencia en el título o la descripción (puedes añadir 'theme', 'director', etc.)
      return (
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query]); // Depende únicamente de la variable 'query'

  // La función de búsqueda ahora solo actualiza el estado 'query'
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="image-container">
              <img className="logo" src={logoEE} alt="Logo" />
        </div>
        <h1 className="title">Buscador de Películas </h1>
        
      </div>
      
      {/* Usamos onChange para filtrar en tiempo real */}
      <input
        type="text"
        placeholder="Busca por título o descripción..."
        value={query}
        onChange={handleSearchChange}
        style={{ padding: '10px', width: '300px' }}
      />
      
      {/* Ya no necesitamos un botón de "Buscar" porque filtramos al escribir */}
      
 
   <div className="movie-list">
  {filteredMovies.length > 0 ? (
    filteredMovies.map((movie) => (
      <div key={movie.id} className="movie-card">
        <h3>{movie.title} </h3>
        {/* <p>Director: {movie.director}</p> */}
        <p>{movie.id} Temática: {movie.theme}</p>
        <p>Descripción: {movie.description}</p>
        {/* <p>Rating: <strong>{movie.rating}</strong>/5</p> */}

        <img src={movie.poster} alt={movie.title} />
      </div>
    ))
  ) : (
    <p>No se encontraron películas.</p>
  )}
</div>
</div>

  );
}

export default BuscadorPeliculas