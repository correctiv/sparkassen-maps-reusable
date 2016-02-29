<map-legend class="sparkassen-map__legend">

  <ul name="legend" if={ legendItems }>
    <li each={ legendItems }
      style="background-color:{ color }">{ step.toFixed(1) } { unit }</li>
  </ul>

  riot.control.on(riot.EVT.layerChanged, data => {
    this.update({legendItems: data.legend,
                 unit: data.metaData.unit})
  })

</map-legend>
