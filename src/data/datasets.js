import Loader from './loader.js'
import colors from './colors.js'

const SOURCES = [
  {
    name: 'Escherichia coli',
    title: 'Percentage with resistance to fluoroquinolones (%R)',
    data: require('dsv!./csv/data3.csv')
  },
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
    title: source.title,
    loader: loader
  }
  DATASETS.push(dataset)
}

export default DATASETS
