<map-layerinfo class="superbugs-map__infobox__layerinfo">

  <h2>{ data.name }</h2>
  <h3>{ data.title }</h3>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data})
  })

</map-layerinfo>
