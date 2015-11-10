import React, { PropTypes, Component } from 'react';
import styles from './Scoreboard.css';
import withStyles from '../../decorators/withStyles';
import Score from '../Score';
import Team from '../Team';
import GameActions from '../../actions/gameActions';

@withStyles(styles)
class Scoreboard extends Component {
  static propTypes = {
    game: PropTypes.object.isRequired,
    editClick: PropTypes.fun,
  };

  editClick(event) {
    event.preventDefault();
    GameActions.gameSelected(this.props.game);
  }

  render() {
    return (
      <div className="Scoreboard">
        <button onClick={this.editClick.bind(this)}>Edit</button>
        <div className="Scoreboard-time">{this.props.game.time}</div>
        <Team team={this.props.game.away.name}/><Score score={this.props.game.away.score}/>
        <Team team={this.props.game.home.name}/><Score score={this.props.game.home.score}/>
      </div>
    );
  }
}

export default Scoreboard;
