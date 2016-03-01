import MapStore from '../stores/mapstore'
import {DEFAULT_DATASET} from '../data/datasets'

<layer-switcher class="sparkassen-map__layer-switcher">

  <button
    each={ layers }
    id="btn{ slug }"
    onclick={ switchLayer }
    disabled={ active === slug}
    class={ active: active === slug}>{ name }</button>

  this.layers = MapStore.getLayers()
  this.active = DEFAULT_DATASET

  this.on('mount', () => {
    // make btn navigation justified for larger screens
    // FIXME this is currently handled in css for exact 4 btn elements
    // let width = 100
    // if (SCREEN.width >= 500) {
    //   width = (100 / this.layers.length).toFixed(2)
    // }
    // let style = 'width:' + width + '%;'
    // for (let layer of this.layers) {
    //   let btn = 'btn' + layer.slug
    //   let el = this[btn]
    //   el.setAttribute('style', style)
    // }
  })

  this.switchLayer = (e) => {
    let slug = e.item.slug
    this.active = slug
    riot.control.trigger(riot.EVT.changeLayer, slug)
  }

</layer-switcher>
