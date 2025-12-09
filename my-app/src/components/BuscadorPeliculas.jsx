/// src/components/BuscadorPeliculas.jsx

import React, { useState, useMemo } from 'react';
// Importa tus datos locales
import { moviesData } from '../dataset/movies'; 
// Importa la interfaz si usas TypeScript
// import { Movie } from '../data/movies'; 


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
      <h1>Buscador de Películas Local</h1>
      
      {/* Usamos onChange para filtrar en tiempo real */}
      <input
        type="text"
        placeholder="Busca por título o descripción..."
        value={query}
        onChange={handleSearchChange}
        style={{ padding: '10px', width: '300px' }}
      />
      
      {/* Ya no necesitamos un botón de "Buscar" porque filtramos al escribir */}
      

      <div className="movie-list" style={{ marginTop: '20px' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px' }}>
              <h3>{movie.title} ({movie.year})</h3>
              <p>Director: {movie.director}</p>
              <p>Temática: {movie.theme}</p>
              <p>{movie.description}</p>
              <p>Rating: **{movie.rating}**/5</p>
              
              <img
                src={movie.poster} // Usamos la URL completa de tu objeto de datos
                alt={movie.title}
                style={{ width: '150px', borderRadius: '5px', marginTop: '10px' }}
              />
            </div>
          ))
        ) : (
          <p>No se encontraron películas que coincidan con "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default BuscadorPeliculas;