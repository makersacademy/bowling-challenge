'use strict';

var yaml = require('js-yaml');

/**
 * Represents a parser that parses YAML strings.
 *
 * @func
 */
module.exports = function YamlParser (text, callback) {
  if (text === '' || text === undefined || text === null) {
    callback(null, null);
    return;
  }

  try {
    var data = yaml.load(text);
    callback(null, data);
  } catch (err) {
    callback(err);
  }
};
