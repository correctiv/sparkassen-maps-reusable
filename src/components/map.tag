import './map_legend.tag';
import data from '../data/data.js';

<superbugs-map>
  <yield/>
  <map-legend></map-legend>

  this.hilight = (e) => {
    if (this.hilighted) {
      this.unhilight()
    }
    let path = e.target
    path.classList.add('-hilighted')
    this.hilighted = path
  }

  this.unhilight = () => {
    this.hilighted.classList.remove('-hilighted')
    this.hilighted = null
  }

  this.eventize = (paths) => {
    paths.map(p => {
      p.addEventListener('mouseover', this.hilight)
    })
  }

  this.colorize = (paths, steps, data) => {
    for (let path of paths) {
      let id = path.getAttribute('id')
      let value = data[id]
      let color = this.getColor(value, steps)
      let style = 'fill:'+color
      path.setAttribute('style', style)
    }
  }

  this.getColor = (value, steps) => {
    let i = 0
    let color = steps[i].color
    while (value > steps[i].value) {
      i++
      if (i === steps.length) {
        break
      }
      color = steps[i].color
    }
    return color
  }

  this.buildData = (data) => {
    let _data = {}
    data.map(d => {
      _data[d.id] = d.value
    })
    return _data
  }

  this.calculate = (data, colors) => {
    let values = []
    data.map(d => {
      values.push(parseFloat(d.value))
    })

    let range = Math.max(...values) - Math.min(...values)
    let stepSize = range/colors.length

    let steps = []
    for (let color of colors) {
      let i = colors.indexOf(color)
      let value = (i+1)*stepSize
      steps.push({value, color})
    }
    return steps
  }

  this.getPaths = (data) => {
    let paths = []
    data.map(d => {
      let p = this[d.id]
      if (p) {
        paths.push(this[d.id])
      }
    })
    return paths
  }

  this.hilighted = null
  this.data = this.buildData(data)
  let paths = this.getPaths(data)
  let colors = ['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b']
  this.eventize(paths)
  this.steps = this.calculate(data, colors)
  this.colorize(paths, this.steps, this.data)

</superbugs-map>
