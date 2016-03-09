var menubar = require('menubar')

var mb = menubar({
  dir: ".",
  width: 400,
  height: 540,
  transparent: true,
  "node-integration": false,
  hasShadow: false
})

mb.on('ready', function ready () {
  console.log('app is ready');
  mb.on('after-create-window', function(){
    mb.window.openDevTools({ detach: true });
    mb.window.webContents.on('new-window', function(e, url) {
      e.preventDefault();
      require('shell').openExternal(url);
    });
  });
})
