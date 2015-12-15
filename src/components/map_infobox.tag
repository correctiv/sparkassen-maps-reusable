import './state_selector.tag'
import './map_layerinfo.tag'

<map-infobox class="superbugs-map__infobox">

  <state-selector></state-selector>

  <map-layerinfo></map-layerinfo>

  <div if={ data } class="superbugs-map__infobox__data">
    <h3>{ data.name }</h3>
    <p>{ data.value } %</p>
  </div>

  this.data = null

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
  })

</map-infobox>
