import ISOLIST from '../data/isolist'

<state-selector class="superbugs-map__states-selector">

  <select onchange={ hilight }>
    <option each={ states } value={ iso } selected={ parent.opts.active === iso }>{ name }</option>
  </select>

  this.states = ISOLIST

  this.hilight = (e) => {
    let id = e.target.value.toLowerCase()
    riot.control.trigger(riot.EVT.hilight, id)
  }
</state-selector>
