import React, { useState } from 'react';
import Listado from './components/Listado';
import Cabecera from './components/Cabecera';

function App() {

  const [favoritas, setFavoritas] = useState(0);

  const manejarFavoritas = () => {
    setFavoritas(favoritas + 1);
  }

  return (
    <div className="App">
      <Cabecera favoritas={favoritas} />
      <Listado manejarFavoritas={manejarFavoritas} />
    </div>
  );
}

export default App;
