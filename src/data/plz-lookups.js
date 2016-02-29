const data = require('dsv!./csv/plz-lookups.csv')

let PLZ_LOOKUP = {}

for (let d of data) {
  PLZ_LOOKUP[d.plz] = d.id
}

export default PLZ_LOOKUP
