module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/components/bosons/colorPalette.scss";'
      }
    }
  }
}
