import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import React from 'react';

export default class CreatePage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      genre: '',
      designer: '',
      description: '',
      min_players: '',
      max_players: ''
    };
  }
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;



  async handleSubmit(e) {
    const { 
      title, 
      genre, 
      designer, 
      description, 
      min_players,
      max_players
    } = this.state;

    e.preventDefault();
    
    // create a game
    await createGame({
      title: this.state.title,
      genre: this.state.genre,
      designer: this.state.designer,
      description: this.state.description,
      min_players: this.state.min_players,
      max_players: this.state.max_players
    });


    // use history.push to send the user to the list page
    this.props.history.push('/board-games');
  }

  render() {  
    return (
      <div className='create'>
        {/* on submit, call your handleSubmit function */}
        <form onSubmit={this.handleSubmit}>
          <><h2>Add board game</h2><label>
        Title
            {/* on change, set the title in state */}
            <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} required name='title' />
          </label><label>
          Genre
            {/* on change, set the genre in state */}
            <select value={this.state.genre} onChange={e => this.setState({ genre: e.target.value })} required name='genre'>
              <option value='tile-laying'>Tile-laying</option>
              <option value='economic'>Economic</option>
              <option value='war'>War</option>
              <option value='card'>Card</option>
              <option value='abstract'>Abstract</option>
              <option value='cooperative'>Cooperative</option>
              <option value='solo'>Solo</option>
            </select>
          </label><label>
          Designer
            {/* on change, set the designer in state */}
            <input value={this.state.designer} onChange={e => this.setState({ designer: e.target.value })} required name='designer' />
          </label><label>
          Min Players
            {/* on change, set the min players in state */}
            <input value={this.state.min_players} onChange={e => this.setState({ min_players: e.target.value })} required name='min_players' />
          </label><label>
          Max Players
            {/* on change, set the max players in state */}
            <input value={this.state.max_players} onChange={e => this.setState({ max_players: e.target.value })} required name='max_players' />
          </label><label>
          Description
            {/* on change, set the description in state */}
            <textarea value={this.state.description} onChange={e => this.setState({ description: e.target.value })} required name='max_players' />
          </label><button>Create game</button></>
        </form>
      </div>
    );
  }
}