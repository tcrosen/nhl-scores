/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes, Component } from 'react';
import styles from './GameManagerPage.css';
import withStyles from '../../decorators/withStyles';
import GameStore from '../../stores/gameStore';

@withStyles(styles)
class GameManagerPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = { games: GameStore.getAll() };
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
    });
  }

  render() {
    const title = 'Game Manager';
    this.context.onSetTitle(title);
    return (
      <div className="GameManagerPage">
        <div className="GameManagerPage-container">
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

export default GameManagerPage;
