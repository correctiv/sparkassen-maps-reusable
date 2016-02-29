import Loader from './loader.js'
import {COLORS7, COLORS9} from './colors.js'

const SOURCES = [
  {
    slug: 'interests_1',
    name: 'Zinsen 1',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichen Sie uns unter sparkasse@correctiv.org.',
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
    name: 'Zinsen 2',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichen Sie uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 6,
      max: 14
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_2.csv')
  },
  {
    slug: 'interests_3',
    name: 'Zinsen 3',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichen Sie uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 6,
      max: 14
    },
    extraValues: ['value2', 'value3', 'value4', 'annotation'],
    data: require('dsv!./csv/zinsen_3.csv')
  },
  {
    slug: 'interests_4',
    name: 'Zinsen 4',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichen Sie uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 6,
      max: 14
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
