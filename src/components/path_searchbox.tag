import {PATHS, NAMES} from '../data/paths'

<path-searchbox class="map__path-searchbox">

  <input type="text" oninput={ search } />
  <ul if={ paths.length > 0 } class="map__path-searchbox__result-list">
    <li each={ paths }
      class={ '-active' ? parent.opts.active === id : ''}
      onclick={ handleClick }>
      { id } - { name }
    </li>
  </ul>
  <p if={ getActiveName() } class="-selected-name">
    { getActiveName() }
  </p>

  this.paths = []

  this.hilight = (id) => {
    // clear list
    this.paths = []
    riot.control.trigger(riot.EVT.hilight, id)
  }

  this.search = (e) => {
    let lstr = e.target.value.toLowerCase()
    if (lstr.length > 3) {
      let results = []
      for (let path of PATHS) {
        if (path.name.toLowerCase().indexOf(lstr) > -1) {
          results.push(path)
        }
      }
      if (results.length == 1) {
        let id = results[0].id
        this.hilight(id)
      } else {
        this.paths = results
      }
    } else if (lstr.length < 4) {
      this.paths = []
    }
  }

  this.handleClick = (e) => {
    let id = e.item.id
    this.hilight(id)
  }

  this.getActiveName = () => {
    let id = this.opts.active
    return NAMES[id]
  }

</path-searchbox>
