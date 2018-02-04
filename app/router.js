'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/occupy', controller.occupy.index);
  router.get('/occupy/sw.js', controller.occupy.sw);
  router.get('/full', controller.full.index);
  router.get('/full/sw.js', controller.full.sw);
  router.get('/', controller.home.index);

  router.get('/image/:randomId', controller.asset.image);
  router.get('/script/:randomId', controller.asset.script);
  router.get('/expensive/image/:randomId', controller.asset.expensiveImage);
  router.get('/expensive/script/:randomId', controller.asset.expensiveScript);
  router.get('/video/:randomId', controller.asset.video);
};
