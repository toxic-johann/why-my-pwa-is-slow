'use strict';

const fs = require('fs');
const path = require('path');

const Controller = require('egg').Controller;

class OccupyController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('occupy', {
      loops: new Array(100).fill(1),
    });
  }

  sw() {
    this.ctx.type = 'text/javascript';
    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/sw/occupy.js'));
  }
}

module.exports = OccupyController;
