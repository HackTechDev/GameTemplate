var GameTemplate = GameTemplate || {};

//title screen
GameTemplate.Game = function(){};

    var param1, param2;

//create game instance
GameTemplate.Game.prototype = {

    init: function(param1, param2) {
        console.log('Game state');
        console.log('param1: ' + param1);
        console.log('param2: ' + param2);

        param1 = param1;
        param2 = param2;
    },


    create: function() {

        var test = this.game.add.sprite(200, 200, 'mushroom');

    },
    update: function() {

    },
}
