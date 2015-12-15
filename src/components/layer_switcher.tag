import MapStore from '../stores/mapstore'

<layer-switcher class="superbugs-map__layer-switcher">

  <button
    each={ layers }
    id="btn{ id }"
    onclick={ switchLayer }
    disabled={ active === id}
    class={ active: active === id}>{ name }</button>

  this.layers = MapStore.getLayers()
  this.active = 0

  this.on('mount', () => {
    // make btn navigation justified
    let width = (100 / this.layers.length).toFixed(2)
    let style = 'width:' + width + '%;'
    for (let id in this.layers) {
      let btn = 'btn' + id
      let el = this[btn]
      el.setAttribute('style', style)
    }
  })

  this.switchLayer = (e) => {
    let id = e.item.id
    this.active = id
    riot.control.trigger(riot.EVT.changeLayer, id)
  }

</layer-switcher>
