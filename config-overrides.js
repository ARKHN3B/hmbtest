/*
 * config-overrides.js
 * Overrides Webpack config created by create-react-app
 * Webpack config can be find here: ./node_modules/react-scripts/config/webpack.config.js
 */

/**
 * Check if the object passed in params exists and if is not empty
 * @param o
 * @returns {boolean|number}
 */
function objectExistsAndIsNotEmpty(o) {
  return (o && o.constructor === Object && Object.entries(o).length)
}

module.exports = function override(config, env) {

  objectExistsAndIsNotEmpty(config.resolve)
    ? objectExistsAndIsNotEmpty(config.resolve.alias)
      ? config.resolve.alias["jquery-ui"] = 'jquery-ui/ui'
      :config.resolve.alias = { 'jquery-ui': 'jquery-ui/ui'}
    : config.resolve = { alias: { 'jquery-ui': 'jquery-ui/ui' } }

  return config;
}