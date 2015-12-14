import MapStore from '../stores/mapstore'

<layer-switcher class="superbugs-map__layer-switcher">

  <h3>switch superbug</h3>
  <button
    each={ layers }
    onclick={ switchLayer }
    disabled={ active === id}
    class={ active: active === id}>{ name }</button>

  this.layers = MapStore.getLayers()
  this.active = 0

  this.switchLayer = (e) => {
    let id = e.item.id
    this.active = id
    riot.control.trigger(riot.EVT.changeLayer, id)
  }

</layer-switcher>
