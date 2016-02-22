import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="map__infobox">

  <div class="map__infobox__data">
    <path-searchbox active={ data.id }></path-searchbox>
    <p class={ -hidden: !data }>{ data.value ? data.value + ' ' + unit : 'n/a' }</p>
  </div>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.unit = data.metaData.unit
  })

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
  })

</map-infobox>
