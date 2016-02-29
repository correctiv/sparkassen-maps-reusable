import MapStore from '../stores/mapstore'

<layer-switcher class="map__layer-switcher">

  <button
    each={ layers }
    id="btn{ slug }"
    onclick={ switchLayer }
    disabled={ active === slug}
    class={ active: active === slug}>{ name }</button>

  this.layers = MapStore.getLayers()
  this.active = 0

  console.log(this.layers)

  this.on('mount', () => {
    // make btn navigation justified
    let width = (100 / this.layers.length).toFixed(2)
    let style = 'width:' + width + '%;'
    for (let layer of this.layers) {
      let btn = 'btn' + layer.slug
      let el = this[btn]
      el.setAttribute('style', style)
    }
  })

  this.switchLayer = (e) => {
    let slug = e.item.slug
    this.active = slug
    riot.control.trigger(riot.EVT.changeLayer, slug)
  }

</layer-switcher>
