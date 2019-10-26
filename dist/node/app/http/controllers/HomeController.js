"use strict";

exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//--------------------------------------------------------
//-- Node IoC - HTTP - Controllers - Home Controller
//--------------------------------------------------------

/**
 * Home controller that shows main application pages.
 */
class HomeController extends _Controller.default {
  /**
   * Show the index page.
   *
   * @returns {response} Home page.
   */
  index() {
    return this.view('pages.home');
  }
  /**
   * Show an example page.
   *
   * @returns {response} An example page.
   */


  example() {
    return this.view('pages.example');
  }

}

var _default = HomeController;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;