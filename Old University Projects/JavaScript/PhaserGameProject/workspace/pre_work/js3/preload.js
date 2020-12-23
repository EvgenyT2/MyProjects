var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 

            this.load.tilemap('map', '../assets/misc/Map_nu3.csv');
            this.load.image('fake_candy', '../assets/misc/fake_candy.png');
            this.load.spritesheet('candy', '../assets/misc/candies_pink_mini.png', 97, 61, 12);
            this.load.image('tileset', '../phaser-ce/platform/tileset_temptooth2.png');
            this.load.image('player', '../phaser-ce/platform/player.png');
            this.load.image('restart', '../assets/misc/restart_opa.png');
            this.load.image('start', '../assets/misc/start_opa.png');
            this.load.image('gameover', '../assets/misc/gameover_opa.png');
            this.load.image('mute', '../assets/misc/mute.png');
            this.load.image('trophy', '../assets/misc/trophy.png');
            //this.load.image('mute', '../assets/misc/off_opa.png');
            //this.load.image('unmute', '../assets/misc/on_opa.png');
            this.load.spritesheet('fairy', '../phaser-ce/platform/fairy.png', 23.375, 49);
            this.load.spritesheet('otus', '../phaser-ce/platform/otus2.png', 28, 32);
            this.game.load.audio('bg_music', '../assets/music/Tausta1.wav');
            //this.game.load.audio('bg_music', '../assets/music/annoing_too.wav');
            //this.game.load.audio('bg_music', '../assets/music/AnnoyingTausta.mp3');
            //this.game.load.audio('bg_music', '../assets/music/Tausta2.wav');
            this.game.load.audio('jump_snd', '../assets/music/Jump2.wav');
            this.game.load.audio('collect_snd', '../assets/music/Collect.wav');
            this.game.load.audio('end_snd', '../assets/music/EndGame.wav');
            this.game.load.audio('levelup_snd', '../assets/music/Levelup.wav');
            
            this.load.tilemap('map2', 'candymap4_Kentta.1.csv');
            this.load.tilemap('map3', '../assets/misc/maps_tp/map_tp1.csv');
            this.load.tilemap('map4', '../assets/misc/maps_tp/map_tp4_2.csv');
            this.load.tilemap('map5', '../assets/misc/maps_tp/map_tp3.csv');
            this.load.tilemap('map6', '../assets/misc/maps_tp/map_tp5.csv');
            this.load.tilemap('map7', '../assets/misc/maps_tp/map_tp0.csv');
            this.load.tilemap('map8', '../assets/misc/maps_tp/map_tp2.csv');
            this.load.image('tileset2', '../phaser-ce/platform/tileset.png');
	},
  	create: function(){
		this.state.start("GameTitle");
	}
}