import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="sparkassen-map__infobox">

  <div class="sparkassen-map__data">

    <path-searchbox active={ data.id } name={ data.name }></path-searchbox>

    <dl class="sparkassen-map__data-listing { -hidden: !data }">
      <dt><strong>{ values.value ? values.value + ' ' + unit : 'n/a' }</strong></dt>
      <dd><strong>Effektiver Dispozins</strong></dd>

      <dt>{ values.value2 ? values.value2 + ' ' + unit : 'n/a' }</dt>
      <dd>Effektiver Überziehungszins</dd>

      <dt>{ values.value3 ? values.value3 + ' ' + unit : 'n/a' }</dt>
      <dd>Guthaben-Zinsen für Sichteinlagen</dd>

      <dt>{ values.value4 ? values.value4 + ' ' + unit : 'n/a' }</dt>
      <dd>Zinsen auf Spareinlagen</dd>
    </dl>

    <small if={ values.annotation }>
      Quelle: { values.annotation }
    </small>

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
