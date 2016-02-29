const data = require('dsv!./csv/slugs.csv')

let SLUGS = {}

for (let d of data) {
  SLUGS[d.id] = d.slug
}

export default SLUGS
