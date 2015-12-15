import Loader from './loader.js'
import colors from './colors.js'

const SOURCES = [
  {
    shortName: 'E. coli',
    name: 'Escherichia coli',
    title: 'Percentage with resistance to fluoroquinolones (%R)',
    annotation: 'Data: 2014, except Poland: 2013',
    euData: 22.4,
    data: require('dsv!./csv/0_e-coli.csv')
  },
  {
    shortName: 'E. coli 3rd',
    name: 'Escherichia coli',
    title: 'Percentage with resistance to third-generation cephalosporins (%R)',
    annotation: 'Data: 2014, except Poland: 2013',
    euData: 12,
    data: require('dsv!./csv/1_e-coli.csv')
  },
  {
    shortName: 'K. p. 3rd',
    name: 'Klebsiella pneumoniae',
    title: 'Percentage with resistance to third-generation cephalosporins (%R)',
    euData: 28,
    annotation: 'Data: 2014, except Poland: 2013',
    data: require('dsv!./csv/2_k-p.csv')
  },
  {
    shortName: 'K. p.',
    name: 'Klebsiella pneumoniae',
    title: 'Percentage with resistance to carbapenems (%R)',
    euData: 7.3,
    annotation: 'Data: 2014, except Poland: 2013',
    data: require('dsv!./csv/3_k-p.csv')
  },
  {
    shortName: 'S. p.',
    name: 'Streptococcus pneumoniae',
    title: 'Percentages non-susceptible to penicillin (%IR)',
    annotation: 'Data: 2014, except Poland: 2013',
    data: require('dsv!./csv/4_s-p.csv')
  },
  {
    shortName: 'MRSA',
    name: 'Staphylococcus aureus',
    title: 'Percentage with resistance to meticillin (MRSA) (%R)',
    euData: 17.4,
    annotation: 'Data: 2014, except Poland: 2013',
    data: require('dsv!./csv/5_mrsa.csv')
  },
  {
    shortName: 'NTS',
    name: 'NTS',
    annotation: 'Source: WHO',
    data: require('dsv!./csv/6_nts.csv')
  },
  {
    shortName: 'Shg.',
    name: 'Shigella',
    annotation: 'Source: WHO',
    data: require('dsv!./csv/7_shigella.csv')
  },
  {
    shortName: 'Neiss.',
    name: 'Neisseria',
    data: require('dsv!./csv/8_neisseria.csv')
  }
]

let DATASETS = []
for (let source of SOURCES) {
  let data = source.data
  let loader = new Loader({colors, data})
  delete source.data
  let metaData = source
  let dataset = {metaData, loader}
  DATASETS.push(dataset)
}

export default DATASETS
