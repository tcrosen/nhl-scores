import React, { PropTypes, Component } from 'react';
import styles from './Team.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Team extends Component {

  static propTypes = {
    team: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="Team">
        {this.props.team}
      </div>
    );
  }

}

export default Team;
