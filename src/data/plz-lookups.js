const data = require('dsv!./csv/plz-lookups.csv')

let PLZ_LOOKUP = {}

for (let d of data) {
  PLZ_LOOKUP[d.plz] = d.id
}

module.exports = PLZ_LOOKUP
