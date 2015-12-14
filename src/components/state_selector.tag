import isoeu from '../data/isoeu.js';

<state-selector class="superbugs-map__states-selector">

  <select onchange={ hilight }>
    <option each={ states } value={ iso }>{ name }</option>
  </select>

  this.states = isoeu

  this.hilight = (e) => {
    let iso = e.target.value.toLowerCase()
    riot.control.trigger(riot.EVT.hilight, iso)
  }
</state-selector>
