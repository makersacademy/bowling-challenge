'use strict';

/**
 * Represents a parser that parses JSON strings.
 *
 * @func
 */
 module.exports = function JsonParser (text, callback) {
  if (text === '' || text === undefined || text === null) {
    callback(null, null);
    return;
  }

  try {
    var data = JSON.parse(text);
    callback(null, data);
  } catch (err) {
    callback(err);
  }
};
