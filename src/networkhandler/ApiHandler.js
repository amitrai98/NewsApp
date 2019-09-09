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
  getNewsList() {
    return new Promise((resolve, reject) => {
      postData = { user_id: userId, loggedin_user_id: loggedin_user_id };
      axios
        .post(ApiConst.BASE_URL + "/svc/mostpopular/v2/viewed/1.json", postData)
        .then(function(response) {
          return resolve({ response });
        })
        .catch(function(error) {
          return reject({ error });
        });
    });
  }
}
