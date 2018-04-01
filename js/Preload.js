var GameTemplate = GameTemplate || {};

//Loading the game assets
GameTemplate.Preload = function(){};

GameTemplate.Preload.prototype = {
    preload: function() {
        //show loading screen
        this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.splash.anchor.setTo(0.5);

        this.load.image('mushroom', 'assets/sprites/mushroom2.png');

    },

    create: function() {
        this.state.start('MainMenu');
    }
};
