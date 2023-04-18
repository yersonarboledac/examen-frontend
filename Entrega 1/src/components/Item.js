import React, { useState } from "react"

export default function Item(props) {

  const [cantPlataforma, setCantPlataforma] = useState(props.data.plataforma);

  const manejarCantPlataforma = () => {
    setCantPlataforma(cantPlataforma - 1);
    props.manejarFavoritas();
  }

  return (
    <div className='plataforma'>
      <h3>{props.data.plataforma.nombre}</h3>
            <h5>plataformas favoritas <span className={cantPlataforma > 0 ? "plataforma" : ""}>{cantPlataforma > 0 ? cantPlataforma : "sin plataformas favoritas"}</span></h5>
      
    </div>
  )
}
