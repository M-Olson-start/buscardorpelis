import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importa el nuevo componente del buscador
import BuscadorPeliculas from './components/BuscadorPeliculas.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     

    

      {/* Añado el buscador de películas aquí abajo */}
      <main>
        <BuscadorPeliculas />
      </main>

    </>
  )
}

export default App