function isArray(o) {
  if (Array.isArray) {
    return Array.isArray(o)
  }
  return Object.prototype.toString.call(o) === '[object Array]'
}

module.exports = {
  isArray
}