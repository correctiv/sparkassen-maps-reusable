const MIN_BORDER = 0;
const MAX_BORDER = 70;

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
      color = colors[i]
    }
    return color
  }

  getRanges() {
    let min = MIN_BORDER
    let max = MAX_BORDER
    let range = max - min
    let steps = this.colors.length
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
      let val = parseFloat(d.value)
      data[d.id.toLowerCase()] = !isNaN(val) ? val : null
    })
    return data
  }
}

export default Loader
