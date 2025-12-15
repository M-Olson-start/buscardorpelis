import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoEE from './assets/logoEE.png'
import './App.css'
// Importa el nuevo componente del buscador
import BuscadorPeliculas from './components/BuscadorPeliculas.jsx'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app-container">
     
  
     

    
      <main>
           
        <BuscadorPeliculas />
      </main>
      </div>
    </>
  )
}

export default App