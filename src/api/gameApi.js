const KIMONO_API_KEY = 'abe6b22285a4d123b8d3ed875ac78331';
import request from 'superagent';
import jsonp from 'superagent-jsonp';
import { map } from 'lodash';

export default {
  getAll(done) {
    request
      .get(`https://www.kimonolabs.com/api/3q4kjoay?apikey=${KIMONO_API_KEY}`)
      .use(jsonp)
      .end((err, resp) => {
        done(map(resp.body.results.games, (game) => {
          game.homeTeamScore = Math.random(1, 10);
          return game;
        }));
      });
  },
};
