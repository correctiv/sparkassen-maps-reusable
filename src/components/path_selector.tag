import {PATHS} from '../data/meta'

<path-selector class="sparkassen-map__path-selector">

  <select onchange={ hilight }>
    <option each={ paths } value={ id } selected={ parent.opts.active === id }>
      { name }
    </option>
  </select>

  this.paths = PATHS

  this.hilight = (e) => {
    let id = e.target.value
    riot.control.trigger(riot.EVT.hilight, id)
  }

</path-selector>
