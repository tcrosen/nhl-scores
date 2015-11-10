import React, { PropTypes, Component } from 'react';
import styles from './Scoreboard.css';
import withStyles from '../../decorators/withStyles';
import Score from '../Score';
import Team from '../Team';

@withStyles(styles)
class Scoreboard extends Component {

  static propTypes = {
    game: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="Scoreboard">
        <div className="Scoreboard-time">{this.props.game.gameTime}</div>
        <Team team={this.props.game.awayTeamName.text}/><Score score={this.props.game.awayTeamScore}/>
        <Team team={this.props.game.homeTeamName.text}/><Score score={this.props.game.homeTeamScore}/>
      </div>
    );
  }
}

export default Scoreboard;
