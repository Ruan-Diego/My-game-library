import React from 'react';
import './CardGame.css'

import { Rating } from 'primereact/rating';
        

const CardGame = ({game}) => {
  let valor;
  if(game?.valor === 0){
    valor = 'Grátis'
  } else {
    valor = game?.valor
  }
  return (
    <div>
      <div className="card">
        <img className="img" src={game?.image_url} alt='Logo Valorant'/>
        <Rating className='avaliar' value={game?.avg_score} readOnly cancel={false} />

        <div className="textBox">
          <p className="text head">{game?.name}</p>
          <span>Clique pra avaliar!</span>
          <Rating className='cursor' value={game?.avg_score} readOnly cancel={false} />
          <p className="text price">{valor}</p>
          <div className="actions">    
            <i className="pi pi-pen-to-square edit"></i>
            <i className="pi pi-trash delete"></i>
          </div>

        </div>
      </div>
      <h3 className="text">{game?.name}</h3>
    </div>

  
  );
}

export default CardGame;
