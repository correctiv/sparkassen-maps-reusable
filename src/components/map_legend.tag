import COLORS from '../data/colors.js'

<map-legend class="superbugs-map__legend">

  <h3>Legend</h3>
  <ul name="legend">
    <li each={ color in colors } id={ colors.indexOf(color)}>
      { 10 + colors.indexOf(color) * 10 } %</li>
  </ul>

  this.colors = COLORS

  this.on('mount', () => {
    for (let color of this.colors) {
      let el = this.legend.children[this.colors.indexOf(color)]
      let style = 'background-color:'+color
      el.setAttribute('style', style)
    }
  })

</map-legend>
