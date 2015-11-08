import React, { PropTypes, Component } from 'react';
import styles from './Scoreboard.css';
import withStyles from '../../decorators/withStyles';
import Score from '../Score';

@withStyles(styles)
class Scoreboard extends Component {

  static propTypes = {
    game: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="Scoreboard">
        <div className="Scoreboard-time">{this.props.game.gameTime}</div>
        <Score className="Scoreboard-team" team={this.props.game.awayTeamName.text} score={this.props.game.awayTeamScore}/>
        <Score className="Scoreboard-team" team={this.props.game.homeTeamName.text} score={this.props.game.homeTeamScore}/>
      </div>
    );
  }
}

export default Scoreboard;
