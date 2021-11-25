((back) => {
  let log = require("Storage").readJSON("cube-scramble.json", 1) || [];

  const menu = {
    '': { 'title': 'cube scramble' },
    '< Back': back,
    'Reset log': () => {
      E.showPrompt("Reset log? (" + log.length + " solves)").then((v) => {
        let delay = 50;
        if (v) {
          delay = 500;
          E.showMessage('Resetting');
          let f = require('Storage').open('cube-scramble.json', 'w');
          log = [];
          f.write(JSON.stringify(log));
        }
        setTimeout(() => E.showMenu(menu), delay);
      });
    }
  };
  E.showMenu(menu);
});
