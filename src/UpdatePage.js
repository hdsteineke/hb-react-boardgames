import { useEffect, useState } from 'react';
// import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function UpdatePage() {
  const [game, setGame] = useState({});
  const { id } = useParams();

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetch() {
      const gameData = await getGameById(id);

      setGame(gameData);
    }
    fetch();
  }, []);


  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form>
        <h2>Edit board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input value={game.title} required name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required>
            <option value={game.genre}>Tile-laying</option>
            <option value={game.genre}>Economic</option>
            <option value={game.genre} >War</option>
            <option value={game.genre}>Card</option>
            <option value={game.genre}>Abstract</option>
            <option value={game.genre}>Cooperative</option>
            <option value={game.genre}>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input value={game.designer} required name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input value={game.min_players} required name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input value={game.max_players} required name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea value={game.description} required name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
