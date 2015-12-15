import ISOLIST from '../data/isolist'

let data = {}

for (let c of ISOLIST) {
  let id = c.iso.toLowerCase()
  data[id] = c.name
}

export default data
