import Loader from './loader.js'
import colors from './colors.js'

const SOURCES = [
  {
    shortName: 'E. coli',
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
  },
  {
    name: 'Keim 1',
    data: require('dsv!./csv/data.csv')
  },
  {
    name: 'Keim 1',
    data: require('dsv!./csv/data.csv')
  },
  {
    name: 'Keim 1',
    data: require('dsv!./csv/data.csv')
  },
  {
    name: 'Keim 1',
    data: require('dsv!./csv/data.csv')
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
  let data = source.data,
    name = source.name,
    shortName = source.shortName || source.name,
    title = source.title
  let loader = new Loader({colors, data})
  let metaData = {name, shortName, title}
  let dataset = {metaData, loader}
  DATASETS.push(dataset)
}

export default DATASETS
