var GameTemplate = GameTemplate || {};

GameTemplate.game = new Phaser.Game(450, 450, Phaser.CANVAS, 'game');

GameTemplate.game.state.add('Boot', GameTemplate.Boot);
GameTemplate.game.state.add('Preload', GameTemplate.Preload);
GameTemplate.game.state.add('MainMenu', GameTemplate.MainMenu);
GameTemplate.game.state.add('Mission', GameTemplate.Mission);
GameTemplate.game.state.add('Game', GameTemplate.Game);

GameTemplate.game.state.start('Boot');

