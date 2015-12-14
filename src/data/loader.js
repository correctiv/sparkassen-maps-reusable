class Loader {

  constructor({colors, data}) {
    this.colors = colors
    this.data = data
  }

  colorize(paths) {
    let data = this.getDataDict()
    for (let path of paths) {
      let id = path.getAttribute('id')
      let value = data[id]
      let color = this.getColor(value)
      let style = 'fill:'+color
      path.setAttribute('style', style)
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
      color = colors[i]
    }
    return color
  }

  getRanges() {
    let borders = this.getBorders()
    let min = borders.min
    let max = borders.max
    let range = max - min
    let steps = this.colors.length
    let stepSize = range/steps
    let ranges = []
    let i = 1
    while (i <= steps) {
      let val = min + i*stepSize
      ranges.push(val)
      i++
    }
    // make sure last value of ranges is the maximum
    ranges[ranges.length-1] = max
    return ranges
  }

  getValues() {
    let values = []
    this.data.map(d => {
      values.push(parseFloat(d.value))
    })
    return values
  }

  getBorders() {
    let values = this.getValues()
    return {
      min: Math.min(...values),
      max: Math.max(...values)
    }
  }

  getDataDict() {
    let data = {}
    this.data.map(d => {
      data[d.id.toLowerCase()] = parseFloat(d.value)
    })
    return data
  }
}

export default Loader
