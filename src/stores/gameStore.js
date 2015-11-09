import request from 'superagent';
import jsonp from 'superagent-jsonp';

const KIMONO_API_KEY = 'abe6b22285a4d123b8d3ed875ac78331';

export default {
  getAll(done) {
    request
      .get(`https://www.kimonolabs.com/api/3q4kjoay?apikey=${KIMONO_API_KEY}`)
      .use(jsonp)
      .end(done);
  },
};
