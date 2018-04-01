var GameTemplate = GameTemplate || {};

//Title
GameTemplate.Mission = function(){};

var param1;
var param2;

GameTemplate.Mission.prototype = {

    init: function(param1, param2) {
        console.log('Mission state');
        console.log('param1: ' + param1);
        console.log('param2: ' + param2);
        param1 = param1;
        param2 = param2;
    },


  create: function() {
    //Start game
    //logo
    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    var text = "Press SPACE to continue";
    var style = { font: "30px Arial", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.width/2, (this.game.height/2)+75, text, style);
    t.anchor.set(0.5);

    this.startButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update: function() {
    if(this.startButton.isDown) {
      this.game.state.start('Game', true, false, param1, param2);
    }
  }
}
