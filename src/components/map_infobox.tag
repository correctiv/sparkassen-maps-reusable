import './state_selector.tag'
import './map_layerinfo.tag'

<map-infobox class="superbugs-map__infobox">

  <map-layerinfo></map-layerinfo>

  <div class="superbugs-map__infobox__data">

    <state-selector active={ data.iso.toUpperCase() }></state-selector>
    <p class={ -hidden: !data }>{ data.value } %</p>

  </div>

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
  })

</map-infobox>
