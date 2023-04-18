import React from 'react'

export default function Cabecera(props) {

  return (
    <header>
      <h1>!Bienvenidos! </h1>
      <h2> contanos Cual es tu plataforma favorita?</h2>
      <p>Cantidad de plataformas <span>{props.favoritas}</span></p>
    </header>
  )
}
