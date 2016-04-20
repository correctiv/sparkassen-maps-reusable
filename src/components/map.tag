import './map_infobox.tag'
import './map_legend.tag'
import './layer_switcher.tag'
import './svg/svg_sparkassen.tag'
import {IDS} from '../data/paths'
import {DEFAULT_DATASET} from '../data/datasets'

<riot-map>
  <layer-switcher></layer-switcher>
  <svg-sparkassen></svg-sparkassen>
  <map-legend></map-legend>
  <map-infobox></map-infobox>

  <script>
    this.on('mount', () => {
      this.hilighted = null
      this.paths = this.getPaths(IDS)
      this.eventize()
      riot.control.trigger(riot.EVT.changeLayer, opts.layer || DEFAULT_DATASET)
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
      let path = this._svg.getPathById(this.hilighted)
      // bring path to front because of stroke styling:
      path.parentElement.appendChild(path)
      path.classList.add('-hilighted')
    }

    this.unhilight = () => {
      if (this.hilighted) {
        let path = this._svg.getPathById(this.hilighted)
        path.classList.remove('-hilighted')
      }
    }

    this.eventize = () => {
      this.paths.map(p => {
        p.addEventListener('mouseover', this.hilight)
      })
    }

    this.getPaths = (ids) => {
      let paths = []
      for (let id in ids) {
        let p = this._svg.getPathById(id)
        if (p) {
          paths.push(p)
        }
      }
      return paths
    }

    this._svg = this.tags['svg-sparkassen']

  </script>

</riot-map>
