import React from 'react';
import './CardGame.css'
import { Rating } from 'primereact/rating';
import FormGame from './FormGame';
import { useState } from 'react';


const CardGame = ({game, deleteGame, getGames}) => {
  const [visible, setVisible] = useState(false);
  let valor;
  if(game?.attributes?.valor === 0){
    valor = 'Grátis'
  } else {
    valor = game?.attributes?.valor
  }

  const deleteG = async (id) => {
    await deleteGame(id);
  }

  const editG = async () => {
    setVisible(true)
  }
  
  const close = async () => {
    setVisible(false);
    getGames();
  }

  return (
    <div>
      <FormGame addGame={null} game={game} close={close} visible={visible}></FormGame>

      <div className="card">
        <img className="img" src={game?.attributes?.image_url} alt='Logo Valorant'/>
        <Rating className='avaliar' value={game?.attributes?.avg_score} readOnly cancel={false} />

        <div className="textBox">
          <p className="text head">{game?.attributes?.name}</p>
          <span>Clique pra avaliar!</span>
          <Rating className='cursor' value={game?.attributes?.avg_score} readOnly cancel={false} />
          <p className="text price">{valor}</p>
          <div className="actions">    
            <i onClick={() => editG(game.id)} className="pi pi-pen-to-square edit"></i>
            <i onClick={() => deleteG(game.id)} className="pi pi-trash delete"></i>
          </div>

        </div>
      </div>
      <h3 className="text">{game?.attributes?.name}</h3>
    </div>

  
  );
}

export default CardGame;
