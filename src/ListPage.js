import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';
import React from 'react';

export default class ListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }
  // you'll need some state to hold onto the array of games

  // fetch the games on load and inject them into state
  // useEffect(() => {
  //   async function fetch() {
  //     const gameData = await getGames();

  //     setGameCollection(gameData);
  //   }
  //   fetch();
  // }, []);

  async componentDidMount() {
    const data = await getGames();

    this.setState({ games: data });
  }

  componentDidUpdate(nextProps, nextState) {
    // eslint-disable-next-line no-empty
    if (nextProps.name !== this.props.name) {
    }

    // eslint-disable-next-line no-empty
    if (nextState.page !== this.state.page) {
      
    }
  }

  render() {
    return (
      <div className='list-games'>
        {games.map((game, i) => 
          <Game key={game.title + i} game={game} 
          />
        )}
      </div>
    );
  }
}