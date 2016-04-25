<map-layerinfo class="sparkassen-map__layerinfo">

  <small if={ data.annotation }>
      { data.annotation }<br>
        Hintergrund: <a href="https://correctiv.org/recherchen/sparkassen/artikel/2016/04/25/notleidende-kredite-was-die-daten-aussagen-koennen-und-was-nicht/">Was die Daten aussagen können - und was nicht</a>
  </small>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({data: data.metaData})
  })

</map-layerinfo>
