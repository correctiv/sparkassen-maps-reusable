import format from 'string-template'

const DEFAULT_TEMPLATE = '<dl class="sparkassen-map__data-listing"><dt>{VALUE_RENDER}</dt><dd>{valueLabel}</dd></dl>'

function getDefaultTemplate(opts) {
  let VALUE_RENDER = '{'+opts.valueCol+'} '+opts.unit
  let valueLabel = opts.valueLabel
  return format(DEFAULT_TEMPLATE, {VALUE_RENDER, valueLabel})
}

// http://colorbrewer2.org/
const COLORS7 = ['#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#99000d']
const COLORS9 = ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d']

module.exports = {COLORS7, COLORS9, getDefaultTemplate}
