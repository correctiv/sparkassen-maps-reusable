import './raw_html.tag'


<map-layerinfo class="sparkassen-map__layerinfo" if={ annotation || annotationHtml }>

  <small>
    { annotation }
    <raw-html if={ annotationHtml } content={ annotationHtml }></raw-html>
  </small>

  riot.control.on(riot.EVT.layerReady, layer => {
    this.update({annotation: layer.opts.annotation,
                 annotationHtml: layer.opts.annotationHtml})
  })

</map-layerinfo>
