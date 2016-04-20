const PATHS = require('dsv!./csv/paths.csv')

let NAMES = {}
let IDS = []

for (let c of PATHS) {
  NAMES[c.id] = c.name
  IDS.push(c.id)
}

module.exports = {PATHS, IDS, NAMES}
