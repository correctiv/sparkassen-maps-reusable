<map-layerinfo class="superbugs-map__infobox__layerinfo">

  <h2>{ data.name }</h2>
  <p class="subtitle">{ data.title }</p>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
