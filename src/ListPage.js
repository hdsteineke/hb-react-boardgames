import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage({ boardgames }) {
  // you'll need some state to hold onto the array of games
  const [gameCollection, setGameCollection] = useState([]);

  // fetch the games on load and inject them into state
  useEffect(() => {
    async function fetch() {
      const gameData = await getGames();

      setGameCollection(gameData);
    }
    fetch();
  }, [gameCollection]);

  return (
    <div className='list-games'>
      {/* map through the games in state and render Game components */}
      {gameCollection.map((game, i) => 
        <Game key={game.title + i} game={game} 
        />
      )}
    </div>
  );
}
