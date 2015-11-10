const KIMONO_API_KEY = 'abe6b22285a4d123b8d3ed875ac78331';
import request from 'superagent';
import jsonp from 'superagent-jsonp';
import { map } from 'lodash';

function parseGame(game) {
  return {
    away: {
      name: game.awayTeamName.text,
      score: parseInt(game.awayTeamScore, 10),
    },
    home: {
      name: game.homeTeamName.text,
      score: parseInt(game.homeTeamScore, 10),
    },
    time: game.gameTime,
  };
}

export default {
  getAll(done) {
    request
      .get(`https://www.kimonolabs.com/api/ondemand/3q4kjoay?apikey=${KIMONO_API_KEY}&date=11/10/2015`)
      .use(jsonp)
      .end((err, resp) => {
        done(map(resp.body.results.games, parseGame));
      });
  },
};
