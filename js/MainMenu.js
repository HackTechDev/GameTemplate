var GameTemplate = GameTemplate || {};

//Title
GameTemplate.MainMenu = function(){};

GameTemplate.MainMenu.prototype = {
  create: function() {
    //Start game
    //logo
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update: function() {
    if(this.startButton.isDown) {
        this.game.state.start('Mission', true, false, "intro", 10);
    }
  }
    
}
