import './path_searchbox.tag'
import './map_layerinfo.tag'

<map-infobox class="sparkassen-map__infobox">

  <div class="sparkassen-map__data">

    <path-searchbox active={ data.id } name={ data.name }></path-searchbox>

    <section class="sparkassen-map__data-listing-wrapper { -hidden: !data }">
      <p>Wie hoch ist der Anteil notleidender Kredite?</p>

      <dl class="sparkassen-map__data-listing">
        <dt><strong>{ renderValue(values.value, '%') }</strong></dt>
        <dd><strong>{ values.label }{ maybeRenderScore(values) }</strong></dd>
        <dt>{ renderValue(extraData.value2.val, '%') }</dt>
        <dd>{ extraData.value2.label }{ maybeRenderScore(extraData.value2) }</dd>
        <dt>{ renderValue(extraData.value3.val, '%') }</dt>
        <dd>{ extraData.value3.label }{ maybeRenderScore(extraData.value3) }</dd>
      </dl>

      <p>Falls alle notleidenden Kredite ausfallen: Wie viele Jahre bräuchte die
        Sparkasse bei gleichbleibendem Gewinn, um den Verlust auszugleichen?
      </p>

      <dl class="sparkassen-map__data-listing">
        <dt>{ renderValue(extraData.verhaeltnis_npl_zu_gewinn.val) }</dt>
        <dd>{ extraData.verhaeltnis_npl_zu_gewinn.label }{ renderScore(extraData.platz_npl_zu_gewinn.val) }</dd>

        <dt>{ renderValue(renderNumber(extraData.notleidende_kredite_2014.val), '€') }</dt>
        <dd>Notleidende Kredite</dd>

        <dt>{ renderValue(renderNumber(extraData.gesamt_jahresueberschuss_fond.val), '€') }</dt>
        <dd>{ extraData.gesamt_jahresueberschuss_fond.label }</dd>
      </dl>

      <p>Wie ist die Sparkasse für schlechte Zeiten gerüstet?</p>

      <dl class="sparkassen-map__data-listing">
        <dt>{ renderValue(extraData.gesamtkapitalquote_2014.val, '%') }</dt>
        <dd>Gesamtkapitalquote{ renderScore(extraData.platz_gesamtkapitalquote.val) }</dd>
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

  this.renderScore= (score) => {
    if (score) {
      return ' (Platz ' + score + ' von 413)'
    }
  }

  this.maybeRenderScore = (values) => {
    // FIXME
    if (values.label === 'Gesamt') {
      let value = this.extraData.platz_nk_kredite_gesamt.val
      if (value) {
        return ' (Platz ' + value + ' von 413)'
      }
    }
  }

  this.renderValue = (value, unit) => {
    let val = ''
    if (this._isValue(value)) {
      val = value.toString()
      if (unit) {
        val = val + ' ' + unit
      }
    } else {
      val = 'k.A.'
    }
    return val
  }

  this.renderNumber = (value) => {
    value = parseInt(value.toString().replace(/,[0-9]+/, ''))
    if (isNaN(value)) {
      return null
    } else if (value.toString().length < 7) {
      let val = (value/1000).toFixed(1)
      return val + ' T.'
    } else {
      let val = (value/1000000).toFixed(1)
      return val + ' Mio.'
    }
  }

  this._isValue = (value) => {
    return value && (value.toString().indexOf('k.A') < 0)
  }

</map-infobox>
