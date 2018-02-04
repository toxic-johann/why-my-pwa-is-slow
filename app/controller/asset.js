'use strict';

const fs = require('fs');
const path = require('path');
const request = require('request');

const Controller = require('egg').Controller;

class AssetController extends Controller {
  image() {
    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/image/girl.jpg'));
  }

  async expensiveImage() {
    await new Promise(resolve => setTimeout(resolve, 10000));

    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/image/girl.jpg'));
  }

  script() {
    this.ctx.type = 'text/javascript';
    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/test/script-count.js'));
  }

  async expensiveScript() {
    await new Promise(resolve => setTimeout(resolve, 10000));

    this.ctx.type = 'text/javascript';
    this.ctx.body = fs.createReadStream(path.resolve(__dirname, '../public/test/script-count.js'));
  }

  video() {
    const req = request('http://cdn.toxicjohann.com/lostStar.mp4');
    this.ctx.body = req;
  }
}

module.exports = AssetController;
