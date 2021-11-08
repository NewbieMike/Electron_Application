const path = require('path');

const StandardWindow = require('./StandardWindow');
const loadCss = require('./loadCss');

function splash () {
  const splashScreen = new StandardWindow({
    file: 'splash.html',
    width: 450,
    height: 200,
    frame: false,
    resizable: false,
    backgroundColor: '#010101'
  }) // building the splashscreen window

  splashScreen.show() // showing it immediately

  splashScreen.onDidFinishLoad = function () {
    loadCss(this, path.join(__dirname, 'splash.css'))
  } // loading the splash css after html loading

  return splashScreen
}

module.exports = splash;