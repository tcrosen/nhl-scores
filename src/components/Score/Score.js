import React, { PropTypes, Component } from 'react';
import styles from './Score.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Score extends Component {

  static propTypes = {
    score: PropTypes.number.isRequired,
  };

  render() {
    return (
      <strong className="Score animated fadeIn">{this.props.score}</strong>
    );
  }

}

export default Score;
