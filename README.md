# sparkassen-maps-reusable

reusable maps app, based on [riot.js](http://riotjs.com/), for mapping data of the german "Sparkassen-Geschäftsgebiete"

## Usage

render a map like this:

- `dataUrl` will be loaded and parsed asynchronusly via [PapaParse](http://papaparse.com/)
- `elId` is the id of the dom element into which the map should be rendered – this must be present in the dom already
- `valueCol` is the column of the dataset that is used to determinate the color
- `range` is the min/max range for building color/value-steps and rendering the legend
- `colors` (optional) you can pass an array of html-colors, and the value-steps will be as many as the length of this array (default: a list of 9 colors, see `src/defaults.js`)

```javascript
renderMap({
  elId: 'sparkassen-map--1',
  layers: [{
    name: 'Gesamt',
    annotationHtml: 'Quellen: Offenlegungsberichte & Jahresabschlüsse 2014<br>Hintergrund: <a href="https://correctiv.org/recherchen/sparkassen/artikel/2016/04/25/notleidende-kredite-was-die-daten-aussagen-koennen-und-was-nicht/">Was die Daten aussagen können - und was nicht</a>',
    range: {
      min: 400000,
      max: 3200000
    },
    dataUrl: 'sample.csv',
    valueCol: 'gesamtbezuege_2014',
    valueLabel: 'Gesamtbezüge 2014',
    unit: '€'
  }]
});
```

### infoBoxTemplate

instead of `valueLabel` you can pass also an `infoBoxTemplate` as an option for a layer, which can contain raw html and column names from the dataset in curly brackets, like this:

`<p class="value">Bilanzsumme: {bilanzsumme_2014}</p>`

in fact, the map *always* uses this template rendering for the `<map-infobox>`-tag, you can find the default template in `src/defaults.js`

this simple template rendering is implemented via [string-template](https://www.npmjs.com/package/string-template)

## Installation

```
$ npm install
```

## Development

```
$ npm run dev
```

Now the server is runnning on localhost:4000


## Build

```
$ npm run build
```
