import React from 'react';
import Item from './Item';
import plataforma from './data.json';

export default function Listado(props) {
  return (
    <div className='container'>
      {productos.map(producto => <Item key={producto.id} data={producto} manejarFavoritas={props.manejarFavoritas} />)}
    </div>
  )
}
