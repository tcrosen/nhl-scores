/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './ScoresPage.css';
import withStyles from '../../decorators/withStyles';
import Scoreboard from '../Scoreboard';
import games from '../../stores/gameStore';

@withStyles(styles)
class ScoresPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Scores';
    const data = games.map((game, idx) => {
      return (
        <Scoreboard key={idx} game={game} />
      );
    });

    this.context.onSetTitle(title);
    return (
      <div className="ScoresPage">
        <div className="ScoresPage-container">
          <h1>{title}</h1>
          {data}
        </div>
      </div>
    );
  }

}

export default ScoresPage;
