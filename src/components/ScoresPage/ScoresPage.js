/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes, Component } from 'react';
import styles from './ScoresPage.css';
import withStyles from '../../decorators/withStyles';
import Scoreboard from '../Scoreboard';
import gameStore from '../../stores/gameStore';

@withStyles(styles)
class ScoresPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { games: [] };
  }

  componentDidMount() {
    setInterval(this.loadGames.bind(this), 500);
  }

  loadGames() {
    this.setState({
      games: gameStore.getAll(),
    });
  }

  render() {
    const title = 'Scores';
    this.context.onSetTitle(title);
    return (
      <div className="ScoresPage">
        <div className="ScoresPage-container">
          <h1>{title}</h1>
          {this.state.games.map((game, idx) => {
            return (
              <Scoreboard key={idx} game={game} />
            );
          })}
        </div>
      </div>
    );
  }

}

export default ScoresPage;
