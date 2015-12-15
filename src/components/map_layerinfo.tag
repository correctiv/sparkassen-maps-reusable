<map-layerinfo class="superbugs-map__infobox__layerinfo">

  <h2>{ data.name }</h2>
  <p class="-subtitle">{ data.title }</p>
  <p if={ data.euData } class="-eudata">EU: { data.euData } %</p>
  <p if={ data.annotation } class="-annotation">{ data.annotation }</p>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
