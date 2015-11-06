/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import Scoreboard from '../Scoreboard';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    const game = {
      home: 'Detroit',
      homeScore: 3,
      away: 'Toronto',
      awayScore: 1,
      time: '00:00',
      period: 1,
    };

    return !this.props.error ? (
      <div>
        <Header />
        <Scoreboard game={game} />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
