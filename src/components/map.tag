import './map_infobox.tag'
import './map_legend.tag'
import './layer_switcher.tag'
import './svg/svg_sparkassen.tag'
import slugify from '../utils/slugify'
import {IDS} from '../data/meta'

<riot-map>
  <layer-switcher></layer-switcher>

  <div if={ loading } class="sparkassen-map__loading">
    <p>loading...</p>
  </div>
  <svg-sparkassen if={ !loading }></svg-sparkassen>

  <map-legend></map-legend>
  <map-infobox template={ template }></map-infobox>

  this.on('mount', () => {
    riot.control.trigger(riot.EVT.initLayers, opts.layers)
    this.hilighted = null
    this.paths = this.getPaths(IDS)
    this.eventize()

    // load first layer
    let firstLayerSlug = slugify(opts.layers[0].name)
    riot.control.trigger(riot.EVT.changeLayer, firstLayerSlug)
  })

  riot.control.on(riot.EVT.hilight, id => {
    this.unhilight()
    this.update({hilighted: id})
    this.hilightPath()
  })

  riot.control.on(riot.EVT.layerReady, layer => {
    this.update({loading: false,
                 template: layer.opts.infoBoxTemplate})
    layer.colorize(this.paths)
  })

  this.hilight = (e) => {
    let id = e.target.getAttribute('id')
    riot.control.trigger(riot.EVT.hilight, id)
  }

  this.hilightPath = () => {
    let path = this._svg.getPathById(this.hilighted)
    if (path) {
      // bring path to front because of stroke styling:
      path.parentElement.appendChild(path)
      path.classList.add('-hilighted')
    }
  }

  this.unhilight = () => {
    if (this.hilighted) {
      let path = this._svg.getPathById(this.hilighted)
      if (path) {
        path.classList.remove('-hilighted')
      }
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
  this.loading = true

</riot-map>
