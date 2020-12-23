var gameTitle = function(game){}
 
gameTitle.prototype = {
  	create: function(){
  		
  		this.stage.backgroundColor = "#4488AA";
  	    var map;
  	    var layer;
  	        
  	    map = this.game.add.tilemap('map', 70, 70);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        layer.resizeWorld();

		var playButton = this.add.button(630, 320, "start", this.playTheGame, this);
		playButton.anchor.setTo(0.5,0.5);
		/*
	    var exitButton = this.add.button(630, 250, "exit", this.exitTheGame, this);
		playButton.anchor.setTo(0.5,0.5);
		*/
	},
	playTheGame: function(){
		this.state.start("level1");
	}
	
	/* , exitTheGame: function (){
		this.state.exit/shutdown(); // window.close();
		
	}  */
}