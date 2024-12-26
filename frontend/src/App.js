import './App.css';
import { useState, useEffect } from 'react';
import { get_games, create_game, get_by_id } from './api/game';
import CardGame from "./components/CardGame"
import { Button } from 'primereact/button';

function App() {

  const [games, setGames] = useState([])



  useEffect(() => {
    const fetchGames = async () => {
      const games = await get_games();  
      console.log(games)
      setGames(games.data);
    }
    fetchGames();
    
  }, [])

  return (
    <div className="App">
      <div className='Header'>
        <h1 className='texto title'>Minha lista de jogos</h1>
        <Button className='button' label="Adicionar jogo" />

      </div>
      <div className="List">
      {
        games.map((game) => {
          return (
            <CardGame game={game.attributes} />
          )
        })
      }   
      </div>
 
    </div>
  );
}

export default App;
