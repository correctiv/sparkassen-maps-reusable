import './map_infobox.tag'
import './map_legend.tag'
import DATA from '../data/data.js'
import COLORS from '../data/colors.js'

<superbugs-map>
  <yield/>
  <map-infobox></map-infobox>
  <map-legend></map-legend>

  this.hilight = (e) => {
    let iso = e.target.getAttribute('id')
    riot.control.trigger(riot.EVT.hilight, iso)
  }

  riot.control.on(riot.EVT.hilight, iso => {
    this.unhilight()
    this.update({hilighted: iso})
    this.hilightPath()
  })

  this.on('mount', () => {
    this.hilighted = null
    this.data = this.buildData(DATA)
    this.paths = this.getPaths(DATA)
    let steps = this.calculate(DATA, COLORS)
    this.eventize(this.paths)
    this.colorize(this.paths, steps, this.data)
  })

  this.hilightPath = () => {
    let path = this[this.hilighted]
    path.classList.add('-hilighted')
  }

  this.unhilight = () => {
    if (this.hilighted) {
      let path = this[this.hilighted]
      path.classList.remove('-hilighted')
    }
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


</superbugs-map>
