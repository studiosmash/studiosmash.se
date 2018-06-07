// Webpack
require('webpack');

// Modules
const path = require('path');

// Configuration
var config = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    modules: ['.', 'node_modules'],
    extensions: ['.js'],
      alias:{}
  }

 };

    config.resolve.alias['TweenLite'] = path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js')
      config.resolve.alias['TweenLite'] = path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js')
      config.resolve.alias['TweenMax'] = path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js')
      config.resolve.alias['TimelineLite'] = path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js')
      config.resolve.alias['TimelineMax'] = path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js')
      config.resolve.alias['ScrollMagic'] = path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js')
      config.resolve.alias['animation.gsap'] = path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')

module.exports = config