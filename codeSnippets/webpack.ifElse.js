var config = {
  entry: './src/index.js'
  //...
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map';
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  }

  return config;
};
