'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('home', {
      loops: new Array(100).fill(1),
    });
  }
}

module.exports = HomeController;
