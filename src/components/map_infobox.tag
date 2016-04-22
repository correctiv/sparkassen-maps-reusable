import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="sparkassen-map__infobox">

  <div class="sparkassen-map__data">

    <path-searchbox active={ data.id } name={ data.name }></path-searchbox>

    <section class="sparkassen-map__data-listing-wrapper { -hidden: !data }">
      <h4>Wie hoch ist der Anteil notleidender Kredite?</h4>

      <dl class="sparkassen-map__data-listing">
        <dt><strong>{ values.value }&nbsp;%</strong></dt>
        <dd><strong>{ values.label }{ renderScore(values) }</strong></dd>
        <dt>{ extraData.value2.val }&nbsp;%</dt>
        <dd>{ extraData.value2.label }{ renderScore(extraData.value2) }</dd>
        <dt>{ extraData.value3.val }&nbsp;%</dt>
        <dd>{ extraData.value3.label }{ renderScore(extraData.value3) }</dd>
      </dl>

      <h4>Falls alle notleidenden Kredite ausfallen: Wie viele Jahre bräuchte die
        Sparkasse bei gleichbleibendem Gewinn, um den Verlust auszugleichen?
      </h4>

      <dl class="sparkassen-map__data-listing">
        <dt>{ extraData.verhaeltnis_npl_zu_gewinn.val }</dt>
        <dd>{ extraData.verhaeltnis_npl_zu_gewinn.label } (Platz { extraData.platz_npl_zu_gewinn.val } von 413)</dd>

        <dt>{ renderNumber(extraData.notleidende_kredite_2014.val) }&nbsp;€</dt>
        <dd>Notleidende Kredite</dd>

        <dt>{ renderNumber(extraData.gesamt_jahresueberschuss_fond.val) }&nbsp;€</dt>
        <dd>{ extraData.gesamt_jahresueberschuss_fond.label }</dd>
      </dl>

      <h4>Wie ist die Sparkasse für schlechte Zeiten gerüstet?</h4>

      <dl class="sparkassen-map__data-listing">
        <dt>{ extraData.gesamtkapitalquote_2014.val } %</dt>
        <dd>Gesamtkapitalquote (Platz { extraData.platz_gesamtkapitalquote.val } von 413)</dd>
        <dt><em>8&nbsp;%</dt>
        <dd><em>Minimale Pflicht nach Basel III</em></dd>
      </dl>

      <small if={ extraData.anmerkungen.val }>
        { extraData.anmerkungen.label }: { extraData.anmerkungen.val }
      </small>
    </section>

  </div>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.layerChanged, dataSet => {
    this.unit = dataSet.metaData.unit
  })

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
    this.values = data.values
    this.extraData = data.values.extra
  })

  this.renderScore = (values) => {
    if (values.label === 'Gesamt') {
      let value = this.extraData.platz_nk_kredite_gesamt.val
      return ' (Platz ' + value + ' von 413)'
    }
  }

  this.renderNumber = (value) => {
    value = parseInt(value.toString().replace(/,[0-9]+/, ''))
    if (value.toString().length < 7) {
      let val = (value/1000).toFixed(1)
      return val + ' T.'
    } else {
      let val = (value/1000000).toFixed(1)
      return val + ' Mio.'
    }
  }

</map-infobox>
