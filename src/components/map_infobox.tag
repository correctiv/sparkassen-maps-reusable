import './state_selector.tag'

<map-infobox class="superbugs-map__infobox">

  <state-selector></state-selector>

  <div if={ data }>
    <h3>{ data.name }</h3>
    <p>{ data.value } %</p>
  </div>

  this.data = null

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
  })

</map-infobox>
