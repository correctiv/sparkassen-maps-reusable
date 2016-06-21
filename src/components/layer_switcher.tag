<layer-switcher>
  <div if={ this.layers.length > 1 } class="sparkassen-map__layer-switcher">

  <button
    each={ layers }
    id="btn{ slug }"
    onclick={ switchLayer }
    disabled={ active === slug}
    class={ active: active === slug}>{ name }</button>

  </div>

  riot.control.on(riot.EVT.layersReady, layers => {
    this.layers = layers
    this.active = layers[0].slug
    this.update()
  })

  this.switchLayer = (e) => {
    let slug = e.item.slug
    this.active = slug
    riot.control.trigger(riot.EVT.changeLayer, slug)
  }

</layer-switcher>
