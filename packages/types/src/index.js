const isArray = require('utils')

const TYPES = {
  array: 'array'
}

module.exports = function(o) {
  if (isArray(o)) return TYPES.array
  return undefined
}