const META = require('dsv!./csv/spk_meta.csv')

let NAMES = {}
let SLUGS = {}
let IDS = []

for (let i of META) {
  NAMES[i.id] = i.name
  SLUGS[i.id] = i.slug
  IDS.push(i.id)
}

const PATHS = META

module.exports = {PATHS, IDS, NAMES, SLUGS}
