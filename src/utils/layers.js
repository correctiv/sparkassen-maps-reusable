import Papa from 'papaparse'
import slugify from '../utils/slugify'
import {COLORS9, getDefaultTemplate} from '../defaults'


class Layer {
  constructor(opts) {
    // defaults
    opts.colors = opts.colors || COLORS9
    opts.valueCol = opts.valueCol || 'value'
    opts.valueLabel = opts.valueLabel || 'Value'
    opts.infoBoxTemplate = opts.infoBoxTemplate || getDefaultTemplate(opts)

    this.opts = opts
  }

  load() {
    Papa.parse(this.opts.dataUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (res) => {
        // setup
        this._ranges = this._getRanges()
        this.data = this._getDataDict(res.data)
        this.colorize = this._colorize
        this.legend = this._getLegend()

        // trigger for riot store
        riot.control.trigger(riot.EVT.layerReady, this)
      },
      error: (err, file) => {
        throw new Error('PapaParse: couldn\'t get file: '+err)
      }
    })
  }

  _getColor(value) {
    let colors = this.opts.colors
    let i = 0
    let color = colors[i]
    while (value > this._ranges[i]) {
      i++
      color = colors[i] || colors[colors.length-1]
    }
    return color
  }

  _getRanges() {
    let min = this.opts.range.min
    let max = this.opts.range.max
    let fixed = this.opts.range.toFixed || 1
    let range = max - min
    let steps = this.opts.colors.length - 1
    let stepSize = range / steps
    let ranges = []
    let i = 1
    while (i <= steps) {
      let val = i * stepSize + min
      ranges.push(val.toFixed(fixed))
      i++
    }
    return ranges
  }

  _colorize(paths) {
    let data = this.data
    for (let path of paths) {
      let id = path.getAttribute('id')
      let _data = data[id]
      let value = null
      if (_data) {
        value = _data[this.opts.valueCol]
      }
      if (value) {
        let color = this._getColor(value)
        let style = 'fill:'+color
        path.setAttribute('style', style)
      } else {
        // remove any previusly colors
        path.removeAttribute('style')
      }
    }
  }

  _getLegend() {
    let ranges = this._ranges
    let legends = []
    for (let step of ranges) {
      let i = ranges.indexOf(step)
      let color = this.opts.colors[i]
      let legend = {step, color}
      legends.push(legend)
    }
    return legends
  }

  _getDataDict(data) {
    let _data = {}
    data.map(d => {
      _data[d.id] = d
    })
    return _data
  }

}


function initLayers(layers) {
  let LAYERS = {}
  for (let layer of layers) {
    LAYERS[slugify(layer.name)] = new Layer(layer)
  }
  return LAYERS
}


export default initLayers
