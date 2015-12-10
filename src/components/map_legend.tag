import isoeu from '../data/isoeu.js';

<map-legend class="superbugs-map__legend">

  <ul>
    <li each={ countries } onmouseover={ hilight }>{ name } ({ iso })</li>
  </ul>

  this.countries = isoeu
  this.hilighted = null
  this.hilightedEl = null
  this.map = this.parent

  this.hilight = (e) => {
    if (this.hilighted) {
      this.unhilight(this.hilighted)
    }
    this.hilightedEl = e.target
    this.hilightedEl.classList.add('-hilighted')
    var id = e.item.iso_l
    var path = this.map[id]
    if (path) {
      path.classList.add('-hilighted')
      this.hilighted = path
    } else {
      console.log('not found:', id)
    }
  }

  this.unhilight = (path) => {
    path.classList.remove('-hilighted')
    this.hilightedEl.classList.remove('-hilighted')
    this.hilightedEl = null
    this.hilighted = null
  }
</map-legend>
