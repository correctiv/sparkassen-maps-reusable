<map-layerinfo class="sparkassen-map__layerinfo">

  <small if={ data.annotation }>
    <strong>Anmerkungen: </strong>{ data.annotation }
  </small>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
