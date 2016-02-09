import Loader from './loader.js'
import {COLORS7, COLORS9} from './colors.js'

const SOURCES = [
  {
    slug: 'e-coli-cephalosporins',
    name: 'Escherichia coli vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins  in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    euData: 12,
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/1_e-coli.csv')
  },
  {
    slug: 'e-coli-fluoroquinolones',
    name: 'Escherichia coli vs fluoroquinolones ',
    title: 'Resistance to fluoroquinolones in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    euData: 22.4,
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/0_e-coli.csv')
  },
  {
    slug: 'k-pneu-cephalosporins',
    name: 'Klebsiella pneumoniae vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    euData: 28,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/2_k-p.csv')
  },
  {
    slug: 'k-pneu-carbapenems',
    name: 'Klebsiella pneumoniae vs carbapenems',
    title: 'Resistance to carbapenems in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    euData: 7.3,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/3_k-p.csv')
  },
  {
    slug: 's-aure-methicillin',
    name: 'Staphylococcus aureus vs methicillin',
    title: 'MRSA in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    euData: 17.4,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/5_mrsa.csv')
  },
  {
    slug: 's-pneu-penicillin',
    name: 'Streptococcus pneumoniae vs penicillin',
    title: 'Resistance to penicillin in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/4_s-p.csv')
  },
  {
    slug: 'salmonella-fluoroquinolones',
    name: 'Salmonella vs fluoroquinolones',
    title: 'Resistance to fluoroquinolones in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'WHO Surveillance report 2014',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/6_nts.csv')
  },
  {
    slug: 'shigella-fluoroquinolones',
    name: 'Shigella vs fluoroquinolones',
    title: 'Resistance to fluoroquinolones in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'WHO Surveillance report 2014',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/7_shigella.csv')
  },
  {
    slug: 'n-gono-cephalosporins',
    name: 'Neisseria gonorrhoea vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'WHO Surveillance report 2014',
    unit: '%',
    range: {
      min: 0,
      max: 64
    },
    data: require('dsv!./csv/8_neisseria.csv')
  },
  {
    slug: 'ab-animals',
    name: 'Antibiotikum Tiere',
    title: 'Resistance to 3rd generation cephalosporins in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'WHO Surveillance report 2014',
    euData: 114,
    unit: 'mg/kg',
    range: {
      min: 0,
      max: 360
    },
    colors: COLORS9,
    data: require('dsv!./csv/9_ab_animals.csv')
  },
  {
    slug: 'ab-humans',
    name: 'Antibiotikum Menschen',
    title: 'Resistance to 3rd generation cephalosporins in percent. Of all infections with this bacterium, this percentage was resistant to this antibiotic.',
    annotation: 'WHO Surveillance report 2014',
    euData: 116.4,
    unit: 'mg/kg',
    range: {
      min: 0,
      max: 360
    },
    colors: COLORS9,
    data: require('dsv!./csv/10_ab_humans.csv')
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
  let loader = new Loader({colors, data, range})
  delete source.data
  let metaData = source
  let dataset = {metaData, loader}
  DATASETS[source.slug] = dataset
  if (i == 0) {
    DEFAULT_DATASET = source.slug
  }
  i = i+1
}

export default {DATASETS, DEFAULT_DATASET}
