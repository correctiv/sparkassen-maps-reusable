import './state_selector.tag'

<map-infobox class="superbugs-map__infobox">

  <h3>{ data.name }</h3>
  <p>({ data.iso })</p>

  <state-selector></state-selector>

  riot.control.on(riot.EVT.dataChanged, data => {
    this.data = data
  })

</map-infobox>
