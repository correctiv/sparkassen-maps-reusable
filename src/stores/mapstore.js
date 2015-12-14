import ISO from '../data/iso.js'

class MapStore {

  constructor() {
    riot.observable(this)
    this.hilighted = null
    this.data = {}
    this.bindEvents()
  }

  bindEvents() {
    this.on(riot.EVT.hilight, (iso) => {
      this.hilighted = iso
      this.data = {
        name: ISO[iso],
        iso: iso
      }
      this.trigger(riot.EVT.dataChanged, this.data)
    })
  }

}

// add store to riot control
let mapStore = new MapStore()
riot.control.addStore(mapStore)

export default mapStore
