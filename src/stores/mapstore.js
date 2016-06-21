import {NAMES} from '../data/meta'
import initLayers from '../utils/layers'
import slugify from '../utils/slugify'


class MapStore {

  constructor() {
    riot.observable(this)
    this.bindEvents()

    // used vars
    this.layers
    this.hilighted
    this.data
  }

  bindEvents() {
    // hilighting
    this.on(riot.EVT.hilight, (id) => {
      this.hilighted = id
      let data = this.data[id] || {id: id}
      data.name = NAMES[id]
      this.trigger(riot.EVT.hilightChanged, data)
    })

    // change data layer
    this.on(riot.EVT.changeLayer, (slug) => {
      this.layers[slug].load()  // will trigger 'layerReady' later
      this.trigger(riot.EVT.layerLoading)
    })

    // layer ready
    this.on(riot.EVT.layerReady, (layer) => {
      this.data = layer.data

      // update data in infobox of previously hilighted
      if (this.hilighted) {
        this.trigger(riot.EVT.hilight, this.hilighted)
      }
    })

    // init layers
    this.on(riot.EVT.initLayers, (layers) => {
      this.layers = initLayers(layers)
      this.shortLayers = []
      let shortLayers = layers.map(l => {
        return {
          name: l.name,
          slug: slugify(l.name)
        }
      })
      this.trigger(riot.EVT.layersReady, shortLayers)
    })

  }

}

// add store to riot control
let mapStore = new MapStore()
riot.control.addStore(mapStore)

module.exports = mapStore
