import Loader from './loader.js'
import {COLORS7, COLORS9} from './colors.js'

const SOURCES = [
  {
    slug: 'interests_1',
    name: 'Dispozinsen',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichst Du uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 6,
      max: 14
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_1.csv')
  },
  {
    slug: 'interests_2',
    name: 'Überziehungszinsen',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichst Du uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 6,
      max: 18
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_2.csv')
  },
  {
    slug: 'interests_3',
    name: 'Guthaben-Zinsen',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichst Du uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 0.00,
      max: 0.04,
      toFixed: 3
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_3.csv')
  },
  {
    slug: 'interests_4',
    name: 'Spareinlagen',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichst Du uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 0,
      max: 0.4,
      toFixed: 2
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_4.csv')
  }
]

let DEFAULT_COLORS = COLORS9
let DATASETS = {}
let LAYERS = []
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

  LAYERS.push({
    name: source.name,
    slug: source.slug
  })
}

export default {DATASETS, DEFAULT_DATASET, LAYERS}
