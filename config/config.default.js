'use strict';

module.exports = appInfo => {
  const config = exports = {
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj': 'nunjucks',
        '.tpl': 'nunjucks',
        '.html': 'nunjucks',
      },
      defaultExtension: '.html',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517494840048_4610';

  // add your config here
  config.middleware = [];

  return config;
};
