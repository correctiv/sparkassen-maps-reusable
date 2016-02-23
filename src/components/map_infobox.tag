import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="map__infobox">

  <div class="map__infobox__data">
    <path-searchbox active={ data.id } name={ data.name }></path-searchbox>
    <p class={ -hidden: !data }>Effektiver Dispozins: { values.value ? values.value + ' ' + unit : 'n/a' }</p>
    <ul class="map__infobox__data__extralist { -hidden: !data }">
      <li>Effektiver Überziehungszins: { values.value2 ? values.value2 + ' ' + unit : 'n/a' }</li>
      <li>Guthaben-Zinsen für Sichteinlagen: { values.value3 ? values.value3 + ' ' + unit : 'n/a' }</li>
      <li>Zinsen auf Spareinlagen: { values.value4 ? values.value4 + ' ' + unit : 'n/a' }</li>
    </ul>
  </div>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.layerChanged, dataSet => {
    this.unit = dataSet.metaData.unit
  })

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
    this.values = data.values
  })

</map-infobox>
