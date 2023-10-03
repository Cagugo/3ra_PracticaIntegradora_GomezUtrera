const CustomRouter = require('../../routes/router'); // Assuming you have a CustomRouter defined similarly to the first code snippet
const cookiesController = require('./cookiesController/cookiesController');

class Cookies extends CustomRouter {
  constructor() {
    super();
    this.setupRoutes();
  }
  setupRoutes() {
    const basePath = '/api/session';
    this.get(`${basePath}/setsignedcookies`, ['ADMIN'], cookiesController.setSignedCookies);
    this.get(`${basePath}/getsignedcookies`, ['ADMIN'], cookiesController.getSignedCookies);
    this.get(`${basePath}/deletesignedcookies`, ['ADMIN'], cookiesController.deleteSignedCookies);
  }
}
module.exports = new Cookies();
