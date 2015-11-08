import { pad, random, sample, times } from 'lodash';

function getRandomScore() {
  return random(1, 7);
}

function getRandomPeriod() {
  return random(1, 3);
}

function getRandomTeam() {
  return sample(['Toronto', 'Detroit', 'Winnipeg', 'Florida', 'Boston', 'Montreal', 'Ottawa', 'Carolina']);
}

function getRandomGame() {
  return {
    home: getRandomTeam(),
    homeScore: getRandomScore(),
    away: getRandomTeam(),
    awayScore: getRandomScore(),
    time: pad(random(1, 20), 2, '0') + ':' + pad(random(1, 59), 2, '0'),
    period: getRandomPeriod(),
  };
}

export default {
  getAll() {
    return times(15, getRandomGame);
  },
};
