class Loader {

  constructor({colors, data, range, extraValues}) {
    this.colors = colors
    this.data = data
    this.range = range
    this.extraValues = extraValues
  }

  colorize(paths) {
    let data = this.getDataDict()
    for (let path of paths) {
      let id = path.getAttribute('id')
      let _data = data[id]
      let value = null
      if (_data) {
        value = _data.value
      }
      if (value) {
        let color = this.getColor(value)
        let style = 'fill:'+color
        path.setAttribute('style', style)
      } else {
        // remove any previusly colors
        path.removeAttribute('style')
      }
    }
  }

  getLegend() {
    let ranges = this.getRanges()
    let legends = []
    for (let step of ranges) {
      let i = ranges.indexOf(step)
      let color = this.colors[i]
      let legend = {step, color}
      legends.push(legend)
    }
    return legends
  }

  getColor(value) {
    let ranges = this.getRanges()
    let colors = this.colors
    let i = 0
    let color = colors[i]
    while (value > ranges[i]) {
      i++
      color = colors[i] || colors[colors.length-1]
    }
    return color
  }

  getRanges() {
    let min = this.range.min
    let max = this.range.max
    let range = max - min
    let steps = this.colors.length - 1
    let stepSize = range / steps
    let ranges = []
    let i = 1
    while (i <= steps) {
      let val = i * stepSize + min
      ranges.push(val)
      i++
    }
    return ranges
  }

  getValues() {
    let values = []
    this.data.map(d => {
      let val = parseFloat(d.value)
      if (!isNaN(val)) {
        values.push(val)
      }
    })
    return values
  }

  getDataDict() {
    let data = {}
    this.data.map(d => {
      data[d.id] = this._buildDataItem(d)
    })
    return data
  }

  _buildDataItem(d) {
    let data = {}
    let val = parseFloat(d.value)
    data.value = !isNaN(val) ? val : null
    if (this.extraValues.length > 0) {
      this.extraValues.map(x => {
        data[x] = d[x]
      })
    return data
    }
  }
}

export default Loader
