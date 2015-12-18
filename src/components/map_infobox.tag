import './state_selector.tag'
import './map_layerinfo.tag'

<map-infobox class="superbugs-map__infobox">

  <div class="superbugs-map__infobox__data">
    <state-selector active={ data.iso.toUpperCase() }></state-selector>
    <p class={ -hidden: !data }>{ data.value ? data.value + ' %' : 'n/a' }</p>
  </div>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
  })

</map-infobox>
