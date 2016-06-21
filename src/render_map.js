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
  let riotEl = document.registerElement('riot-map')
  wrapperEl.appendChild(new riotEl())
  riot.mount('riot-map', {layers: opts.layers})
}


export default renderMap
