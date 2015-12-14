import './map_infobox.tag'
import './map_legend.tag'
import './layer_switcher.tag'
import ISO from '../data/iso'

<superbugs-map>
  <yield/>
  <map-infobox></map-infobox>
  <map-legend></map-legend>
  <layer-switcher></layer-switcher>

  this.on('mount', () => {
    this.hilighted = null
    this.paths = this.getPaths(ISO)
    this.eventize()
    // initial layer:
    riot.control.trigger(riot.EVT.changeLayer, 0)
  })

  riot.control.on(riot.EVT.hilight, id => {
    this.unhilight()
    this.update({hilighted: id})
    this.hilightPath()
  })

  riot.control.on(riot.EVT.layerChanged, data => {
    data.colorize(this.paths)
  })

  this.hilight = (e) => {
    let id = e.target.getAttribute('id')
    riot.control.trigger(riot.EVT.hilight, id)
  }

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

  this.eventize = () => {
    this.paths.map(p => {
      p.addEventListener('mouseover', this.hilight)
    })
  }

  this.getPaths = (isoData) => {
    let paths = []
    for (let id in isoData) {
      let p = this[id]
      if (p) {
        paths.push(this[id])
      }
    }
    return paths
  }


</superbugs-map>
