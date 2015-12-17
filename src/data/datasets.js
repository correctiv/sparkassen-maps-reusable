import Loader from './loader.js'
import colors from './colors.js'

const SOURCES = [
  {
    name: 'Escherichia coli vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins  in percent',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    euData: 12,
    data: require('dsv!./csv/1_e-coli.csv')
  },
  {
    name: 'Escherichia coli vs fluoroquinolones ',
    title: 'Resistance to fluoroquinolones in percent',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    euData: 22.4,
    data: require('dsv!./csv/0_e-coli.csv')
  },
  {
    name: 'Klebsiella pneumoniae vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins in percent',
    euData: 28,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    data: require('dsv!./csv/2_k-p.csv')
  },
  {
    name: 'Klebsiella pneumoniae vs carbapenems',
    title: 'Resistance to carbapenems in percent',
    euData: 7.3,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    data: require('dsv!./csv/3_k-p.csv')
  },
  {
    name: 'Staphylococcus aureus vs methicillin',
    title: 'MRSA in percent',
    euData: 17.4,
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    data: require('dsv!./csv/5_mrsa.csv')
  },
  {
    name: 'Streptococcus pneumoniae vs penicillin',
    title: 'Resistance to penicillin in percent',
    annotation: 'ECDC Surveillance report 2014, except Poland (2013)',
    data: require('dsv!./csv/4_s-p.csv')
  },
  {
    name: 'Salmonella vs fluoroquinolones',
    title: 'Resistance to fluoroquinolones in percent',
    annotation: 'WHO Surveillance report 2014',
    data: require('dsv!./csv/6_nts.csv')
  },
  {
    name: 'Shigella vs fluoroquinolones',
    title: 'Resistance to fluoroquinolones in percent',
    annotation: 'WHO Surveillance report 2014',
    data: require('dsv!./csv/7_shigella.csv')
  },
  {
    name: 'Neisseria gonorrhoea vs cephalosporins',
    title: 'Resistance to 3rd generation cephalosporins in percent',
    annotation: 'WHO Surveillance report 2014',
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
