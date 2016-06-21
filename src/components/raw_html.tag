<raw-html>
  this.updateContent = () => {
    this.root.innerHTML = opts.content
  }

  this.on('update', () => {
    this.updateContent()
  })

  this.updateContent()
</raw-html>
