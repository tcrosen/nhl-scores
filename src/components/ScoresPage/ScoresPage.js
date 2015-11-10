/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes, Component } from 'react';
import styles from './ScoresPage.css';
import withStyles from '../../decorators/withStyles';
import Scoreboard from '../Scoreboard';
import GameStore from '../../stores/gameStore';
import TextBox from '../TextBox';

@withStyles(styles)
class ScoresPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      games: GameStore.getAll(),
      game: GameStore.getSelected(),
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    GameStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    GameStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      games: GameStore.getAll(),
      game: GameStore.getSelected(),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const title = 'Scores';
    this.context.onSetTitle(title);
    return (
      <div className="ScoresPage">
        <div className="ScoresPage-container">
          <h1>{title}</h1>

          <form>
            <label>Away:</label>
            <TextBox name="awayTeamName" value={this.state.game.away.name}/>
            <label>Home:</label>
            <TextBox name="homeTeamName" value={this.state.game.home.name}/>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>

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
