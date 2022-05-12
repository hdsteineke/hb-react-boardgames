import { useState } from 'react';
import { createGame } from './services/fetch-utils';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(1);
  const [designer, setDesigner] = useState('');
  const [description, setDescription] = useState('');
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(1);


  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    const newGame = await createGame({
      title,
      genre,
      designer,
      description,
      min_players: minPlayers,
      max_players: maxPlayers
    });

    // use history.push to send the user to the list page
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input value={title} onChange={e => setTitle(e.target.value)} required name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select value={genre} onChange={e => setGenre(e.target.value)} required>
            <option value='1'>Tile-laying</option>
            <option value='2'>Economic</option>
            <option value='3'>War</option>
            <option value='4'>Card</option>
            <option value='6'>Abstract</option>
            <option value='7'>Cooperative</option>
            <option value='8'>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input value={designer} onChange={e => setDesigner(e.target.value)} required name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input value={minPlayers} onChange={e => setMinPlayers(e.target.value)} required name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input value={maxPlayers} onChange={e => setMaxPlayers(e.target.value)} required name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea value={description} onChange={e => setDescription(e.target.value)} required name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
