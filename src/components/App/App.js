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
    const games = [{
      home: 'Detroit',
      homeScore: 3,
      away: 'Toronto',
      awayScore: 1,
      time: '00:00',
      period: 1,
    }, {
      home: 'Montreal',
      homeScore: 4,
      away: 'Winnipeg',
      awayScore: 1,
      time: '33:33',
      period: 2,
    }, {
      home: 'Columbus',
      homeScore: 2,
      away: 'Washington',
      awayScore: 2,
      time: '33:00',
      period: 3,
    }];

    const scores = games.map((game) => {
      return <Scoreboard game={game} />;
    });

    return !this.props.error ? (
      <div>
        <Header />
        {scores}
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
