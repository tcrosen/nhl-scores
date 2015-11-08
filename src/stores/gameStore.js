import request from 'superagent';
import jsonp from 'superagent-jsonp';

export default {
  getAll(done) {
    request
      .get('https://www.kimonolabs.com/api/3q4kjoay?apikey=abe6b22285a4d123b8d3ed875ac78331')
      .use(jsonp)
      .end(done);
  },
};
