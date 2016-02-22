<map-layerinfo class="map__infobox__layerinfo">

  <h4>{ data.name }</h4>
  <p class="-subtitle">{ data.title }</p>
  <p if={ data.annotation } class="-annotation">{ data.annotation }</p>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
