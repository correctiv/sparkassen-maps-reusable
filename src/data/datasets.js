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
      max: 12
    },
    values: {
      value: 'Effektiver Dispozins',
      value2: 'Effektiver Überziehungszins',
      value3: 'Guthaben-Zinsen für Sichteinlagen',
      value4: 'Zinsen auf Spareinlagen',
      annotation: 'Info'
    },
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
    values: {
      value2: 'Effektiver Dispozins',
      value: 'Effektiver Überziehungszins',
      value3: 'Guthaben-Zinsen für Sichteinlagen',
      value4: 'Zinsen auf Spareinlagen',
      annotation: 'Info'
    },
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
    values: {
      value2: 'Effektiver Dispozins',
      value3: 'Effektiver Überziehungszins',
      value: 'Guthaben-Zinsen für Sichteinlagen',
      value4: 'Zinsen auf Spareinlagen',
      annotation: 'Info'
    },
    data: require('dsv!./csv/zinsen_3.csv')
  },
  {
    slug: 'interests_4',
    name: 'Spareinlagen',
    annotation: 'Die Daten haben wir im Zeitraum von November 2015 bis Februar 2016 erfasst. Wir beziehen uns immer auf das Kontomodell mit dem günstigsten Grundpreis, was unabhängig vom Alter abgeschlossen werden kann. Für Rückfragen erreichst Du uns unter sparkasse@correctiv.org.',
    unit: '%',
    range: {
      min: 0,
      max: 0.2,
      toFixed: 2
    },
    values: {
      value2: 'Effektiver Dispozins',
      value3: 'Effektiver Überziehungszins',
      value4: 'Guthaben-Zinsen für Sichteinlagen',
      value: 'Zinsen auf Spareinlagen',
      annotation: 'Info'
    },
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
  let values = source.values || []
  let loader = new Loader({colors, data, range, values})
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

module.exports = {DATASETS, DEFAULT_DATASET, LAYERS}
