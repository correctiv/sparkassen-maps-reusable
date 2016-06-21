<map-legend class="sparkassen-map__legend">

  <ul name="legend" if={ legendItems }>
    <li each={ legendItems }
      style="background-color:{ color }">{ step } { unit }</li>
  </ul>

  riot.control.on(riot.EVT.layerReady, layer => {
    this.update({legendItems: layer.legend,
                 unit: layer.opts.unit})
  })

</map-legend>
