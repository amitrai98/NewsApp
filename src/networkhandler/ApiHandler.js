import ApiConst from "./ApiConst";

var axios = require("axios");
var authToken = null;

export default class ApiHandler {
  instance = null;

  /**
   * provides token for api calls
   * @param {token for api call} authToken
   */
  static getInstance(token) {
    if (this.instance == null) {
      this.instance = new ApiHandler();
    }
    authToken = token;
    return this.instance;
  }

  /**
   * returns header
   */
  getHeader() {
    return {
      headers:
        authToken != null && authToken != undefined
          ? this.getHeaderWithToken()
          : ""
    };
  }

  /**
   * returns header with authtoken
   */
  getHeaderWithToken() {
    return {
      api: authToken
    };
  }

  /**
   * Gets list of news articles from server.   *
   */
  getNewsList(since) {
    return new Promise((resolve, reject) => {
      let url =
        ApiConst.BASE_URL +
        `/svc/mostpopular/v2/viewed/${since}.json?api-key=` +
        ApiConst.TOKEN;
      axios
        .get(url)
        .then(function(response) {
          return resolve({ response });
        })
        .catch(function(error) {
          return reject({ error });
        });
    });
  }
}
