'use strict';

exports.__esModule = true;
var isChecked = function isChecked(value) {
  if (typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'string') {
    var lower = value.toLowerCase();
    if (lower === 'true') {
      return true;
    }
    if (lower === 'false') {
      return false;
    }
  }
  return undefined;
};

exports.default = isChecked;