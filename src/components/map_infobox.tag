import format from 'string-template'
import './path_searchbox.tag'
import './map_layerinfo.tag'
import './raw_html.tag'


<map-infobox class="sparkassen-map__infobox">

  <path-searchbox active={ data.id } name={ data.name }></path-searchbox>

  <section class="sparkassen-map__data-listing-wrapper { -hidden: !data }">
    <raw-html content={ rawContent }></raw-html>
  </section>

  <map-layerinfo></map-layerinfo>

  riot.control.on(riot.EVT.hilightChanged, data => {
    this.data = data
    this.rawContent = format(this.opts.template, this.data)
  })

</map-infobox>
