 /**
  * render riot svg map with given opts
  *
  * @param {object} opts - options as mapping
  *
  * example:
  *
  *   renderMap({
  *     elId: 'sparkassen-map--1',
  *     datasets: [{
  *       name: 'Gesamt',
  *       annotation: 'Quellen: Offenlegungsberichte & Jahresabschlüsse 2014',
  *       range: {
  *         min: 0,
  *         max: 6
  *       },
  *       dataUrl: 'sample.csv'
  *     }]
  *   });
  *
  *
  **/
function renderMap(opts) {
  let wrapperEl = document.getElementById(opts.elId)
  let riotEl = document.createElement('DIV')
  let riotElId = opts.elId+'-riot-map'
  riotEl.id = riotElId
  wrapperEl.appendChild(riotEl)
  let riotSelector = 'div#'+riotElId
  riot.mount(riotSelector, 'riot-map', {layers: opts.layers})
}


export default renderMap
