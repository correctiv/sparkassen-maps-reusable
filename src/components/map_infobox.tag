import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="sparkassen-map__infobox">

  <div class="sparkassen-map__data">

    <path-searchbox active={ data.id } name={ data.name }></path-searchbox>

    <dl class="sparkassen-map__data-listing { -hidden: !data }">
      <dt><strong>{ values.value ? values.value + ' ' + unit : 'n/a' }</strong></dt>
      <dd><strong>{ values.label }</strong></dd>

      <dt>{ extraData.value2.val ? extraData.value2.val + ' ' + unit : 'n/a' }</dt>
      <dd>{ extraData.value2.label }</dd>

      <dt>{ extraData.value3.val ? extraData.value3.val + ' ' + unit : 'n/a' }</dt>
      <dd>{ extraData.value3.label }</dd>

      <dt>{ extraData.value4.val ? extraData.value4.val + ' ' + unit : 'n/a' }</dt>
      <dd>{ extraData.value4.label }</dd>
    </dl>

    <small if={ extraData.annotation }>
      { extraData.annotation.label }: { extraData.annotation.val }
    </small>

  </div>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.layerChanged, dataSet => {
    this.unit = dataSet.metaData.unit
  })

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
    this.values = data.values
    this.extraData = data.values.extra
  })

</map-infobox>
