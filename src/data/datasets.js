import Loader from './loader.js'
import colors from './colors.js'

const SOURCES = [
  {
    name: 'Keim 1',
    data: require('dsv!./csv/data.csv')
  },
  {
    name: 'Keim 2',
    data: require('dsv!./csv/data2.csv')
  }
]

let DATASETS = []
for (let source of SOURCES) {
  let loader = new Loader({
    colors: colors,
    data: source.data
  })
  let dataset = {
    name: source.name,
    loader: loader
  }
  DATASETS.push(dataset)
}

export default DATASETS
