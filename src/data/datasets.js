import Loader from './loader.js'
import {COLORS7, COLORS9} from './colors.js'

const SOURCES = [
  {
    slug: 'interests',
    name: 'Zinsen',
    title: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    annotation: 'Annotations (2016)',
    unit: '%',
    range: {
      min: 6,
      max: 14
    },
    extraValues: ['value2', 'value3', 'value4'],
    data: require('dsv!./csv/zinsen_clean.csv')
  }
]

let DEFAULT_COLORS = COLORS9
let DATASETS = {}
let DEFAULT_DATASET
let i = 0
for (let source of SOURCES) {
  let data = source.data
  let range = source.range
  let colors = source.colors || DEFAULT_COLORS
  let extraValues = source.extraValues || []
  let loader = new Loader({colors, data, range, extraValues})
  delete source.data
  let metaData = source
  let dataset = {metaData, loader}
  DATASETS[source.slug] = dataset
  if (i == 0) {
    DEFAULT_DATASET = source.slug
  }
  i++
}

export default {DATASETS, DEFAULT_DATASET}
