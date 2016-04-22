<svg-sparkassen class="svgcontainer">

  this.root.innerHTML = require('svg-inline!../../svg/sparkassen.svg')
  this.paths = this.root.getElementsByTagName('path')

  this.getPathById = (id) => {
    // we must use Array.prototype because `this.paths` is HTMLCollection (array-like)
    return Array.prototype.filter.call(this.paths, function (p) {return p.id == id})[0] || null
  }

</svg-sparkassen>
