import Loader from './loader.js'
import {COLORS7, COLORS9} from './colors.js'

const SOURCES = [
  {
    slug: 'kredite_gesamt',
    name: 'Gesamt',
    annotation: 'Quellen: Offenlegungsberichte & Jahresabschlüsse 2014',
    unit: '%',
    range: {
      min: 0,
      max: 6
    },
    values: {
      notleidende_kredite_2014: 'Notleidende Kredite',
      value: 'Gesamt',
      value3: 'Unternehmen & Selbstständige',
      value2: 'Privatpersonen',
      platz_nk_kredite_gesamt: 'Platz',
      gesamt_jahresueberschuss_fond: 'Gewinn',
      verhaeltnis_npl_zu_gewinn: 'Jahre',
      platz_npl_zu_gewinn: 'Jahre Platz',
      gesamtkapitalquote_2014: 'Kapitalquote',
      platz_gesamtkapitalquote: 'Platz Kapital',
      anmerkungen: 'Info'
    },
    data: require('dsv!./csv/kredite1.csv')
  },
  {
    slug: 'kredite_unternehmen',
    name: 'Unternehmen & Selbstständige',
    annotation: 'Quellen: Offenlegungsberichte & Jahresabschlüsse 2014',
    unit: '%',
    range: {
      min: 0,
      max: 6
    },
    values: {
      notleidende_kredite_2014: 'Notleidende Kredite',
      value2: 'Gesamt',
      value: 'Unternehmen & Selbstständige',
      value3: 'Privatpersonen',
      platz_nk_kredite_gesamt: 'Platz',
      gesamt_jahresueberschuss_fond: 'Gewinn',
      verhaeltnis_npl_zu_gewinn: 'Jahre',
      platz_npl_zu_gewinn: 'Jahre Platz',
      gesamtkapitalquote_2014: 'Kapitalquote',
      platz_gesamtkapitalquote: 'Platz Kapital',
      anmerkungen: 'Info'
    },
    data: require('dsv!./csv/kredite3.csv')
  },
  {
    slug: 'kredite_privat',
    name: 'Privatpersonen',
    annotation: 'Quellen: Offenlegungsberichte & Jahresabschlüsse 2014',
    unit: '%',
    range: {
      min: 0,
      max: 6
    },
    values: {
      notleidende_kredite_2014: 'Notleidende Kredite',
      value2: 'Gesamt',
      value3: 'Unternehmen & Selbstständige',
      value: 'Privatpersonen',
      platz_nk_kredite_gesamt: 'Platz',
      gesamt_jahresueberschuss_fond: 'Gewinn',
      verhaeltnis_npl_zu_gewinn: 'Jahre',
      platz_npl_zu_gewinn: 'Jahre Platz',
      gesamtkapitalquote_2014: 'Kapitalquote',
      platz_gesamtkapitalquote: 'Platz Kapital',
      anmerkungen: 'Info'
    },
    data: require('dsv!./csv/kredite2.csv')
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
