var GameTemplate = GameTemplate || {};

GameTemplate.Boot = function(){};

//set game config and loading assets for the loading screen:
GameTemplate.Boot.prototype = {
  preload: function() {
    //assets for loading screen:
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
    //loading screen has white background:
    this.game.stage.backgroundColor = "#fff";

    //physics system

    this.state.start('Preload');
  }
};
