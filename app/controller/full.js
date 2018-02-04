'use strict';

const fs = require('fs');
const path = require('path');

const Controller = require('egg').Controller;

class OccupyController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('full', {
      loops: new Array(2).fill(1),
    });
  }

  sw() {
    this.ctx.type = 'text/javascript';
    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/sw/full.js'));
  }
}

module.exports = OccupyController;
