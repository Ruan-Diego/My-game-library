import './App.css';
import { useState, useEffect } from 'react';
import { get_games, create_game, update_game, delete_game } from './api/game';
import CardGame from "./components/CardGame"
import { Button } from 'primereact/button';
import FormGame from './components/FormGame';

function App() {

  const [games, setGames] = useState([])
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await get_games();  
      setGames(games.data);
    }
    fetchGames();
    
  }, [])

  const getGames = async () => {
    const games = await get_games();  
    setGames(games.data);
  }
  const addGame = async (element) => {
    await create_game(element);
    getGames();
    setVisible(false)
  }

  const deleteGame = async (id) => {
    await delete_game(id);
    getGames();
  }

  const close = async () => {
    setVisible(false);
  }



  return (
    <div className="App">
      <FormGame addGame={addGame} game={null} close={close} visible={visible}></FormGame>
      <div className='Header'>
        <h1 className='texto title'>Minha lista de jogos</h1>
        <Button className='button' label="Adicionar jogo" onClick={() => setVisible(true)} />

      </div>
      <div className="List">
      {
        games.map((game) => {
          return (
            <CardGame getGames={getGames} game={game} deleteGame={deleteGame} />
          )
        })
      }   
      </div>
 
    </div>
  );
}

export default App;
