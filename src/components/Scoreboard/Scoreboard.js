import React, { PropTypes, Component } from 'react';
import styles from './Scoreboard.css';
import withStyles from '../../decorators/withStyles';
import Score from '../Score';

@withStyles(styles)
class Scoreboard extends Component {

  // {
  //   home: PropTypes.string,
  //   homeScore: PropTypes.number,
  //   away: PropTypes.string,
  //   awayScore: PropTypes.number,
  //   time: PropTypes.string,
  //   period: PropTypes.number,
  // }
  //

  static propTypes = {
    game: PropTypes.object.isRequired,
  };


  render() {
    console.log(this.props);

    return (
      <div className="Scoreboard">
        <div className="Scoreboard-time">{this.props.game.time}</div>
        <div className="Scoreboard-period">{this.props.game.period}</div>
        <Score className="Scoreboard-team" team={this.props.game.away} score={this.props.game.awayScore}/>
        <Score className="Scoreboard-team" team={this.props.game.home} score={this.props.game.homeScore}/>
      </div>
    );
  }
}

export default Scoreboard;
