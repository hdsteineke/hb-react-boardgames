import { useEffect, useState } from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';
import { updateGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function UpdatePage() {
  const [game, setGame] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetch() {
      const gameData = await getGameById(id);

      setGame(gameData);
    }
    fetch();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    const updatedGame = await updateGame(id, {
      title: game.title,
      genre: game.genre,
      designer: game.designer,
      description: game.description,
      min_players: game.minPlayers,
      max_players: game.maxPlayers
    }
    );

    setGame(updatedGame);
    

    // use history.push to send the user to the list page
    history.push('./board-games');
  }


  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Edit board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input onChange={e => setGame({ ...game, title: e.target.value })} value={game.title} required name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select onChange={e => setGame({ ...game, genre: e.target.value })} required>
            <option value={'1'}>Tile-laying</option>
            <option value={'2'}>Economic</option>
            <option value={'3'} >War</option>
            <option value={'4'}>Card</option>
            <option value={'5'}>Abstract</option>
            <option value={'6'}>Cooperative</option>
            <option value={'7'}>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input value={game.designer} onChange={e => setGame({ ...game, designer: e.target.value })} required name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input value={game.min_players} onChange={e => setGame({ ...game, min_players: e.target.value })} required name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input value={game.max_players} onChange={e => setGame({ ...game, max_players: e.target.value })} required name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea value={game.description} onChange={e => setGame({ ...game, description: e.target.value })} required name='description' />
        </label>
        <button>Update game</button>
      </form>
    </div>
  );
}
