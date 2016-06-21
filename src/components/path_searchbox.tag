import {PATHS, SLUGS} from '../data/meta'
import PLZ_LOOKUP from '../data/plz-lookups'

<path-searchbox class="sparkassen-map__path-searchbox">

  <input type="text" oninput={ search } />
  <p if={ !paths.length > 0 } >Suche nach Deiner Sparkasse oder Postleitzahl</p>
  <ul if={ paths.length > 0 } class="sparkassen-map__result-list">
    <li each={ paths }
      class={ '-active' ? parent.opts.active === id : ''}
      onclick={ handleClick }>
      { name }
    </li>
  </ul>
  <h3 if={ opts.name }>
    <a href={ getUrl(opts.active) }>{ opts.name }</a>
  </h3>

  this.paths = []

  this.hilight = (id) => {
    // clear list
    this.paths = []
    riot.control.trigger(riot.EVT.hilight, id)
  }

  this.search = (e) => {
    // this search function checks both for postcodes and names
    let lstr = e.target.value.toLowerCase()
    if (lstr.length > 3) {
      let results = []
      if (isNaN(parseInt(lstr))) {
        // name lookup
        for (let path of PATHS) {
          if (path.name.toLowerCase().indexOf(lstr) > -1) {
            results.push(path)
          }
        }
      } else {
        // postcode lookup
        let ids = []
        for (let lookup in PLZ_LOOKUP) {
          if (lookup.indexOf(lstr) > -1) {
            let id = PLZ_LOOKUP[lookup]
            if (ids.indexOf(id) == -1) {
              ids.push(PLZ_LOOKUP[lookup])
              let path = this._getPathForId(id)
              if (path) {
                results.push(path)
              }
            }
          }
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

  this.getUrl = (id) => {
    let slug = SLUGS[id]
    if (slug) {
      return 'https://crowdnewsroom.org/sparkassen/sparkasse/' + slug + '/'
    }
  }

  this._getPathForId = (id) => {
    for (let path of PATHS) {
      if (path.id === id) {
        return path
      }
    }
  }

</path-searchbox>
