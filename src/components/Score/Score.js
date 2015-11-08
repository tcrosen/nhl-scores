import React, { PropTypes, Component } from 'react';
import styles from './Score.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Score extends Component {

  static propTypes = {
    team: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="Score">
        {this.props.team}: <strong>{this.props.score}</strong>
      </div>
    );
  }

}

export default Score;
