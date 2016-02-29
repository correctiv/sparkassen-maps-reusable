<map-layerinfo class="sparkassen-map__layerinfo">

  <h4>{ data.name }</h4>
  <p>{ data.title }</p>
  <small if={ data.annotation }>{ data.annotation }</small>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
