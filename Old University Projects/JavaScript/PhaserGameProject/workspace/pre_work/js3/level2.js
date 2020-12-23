var level2 = function(game){
        var map;
        var layer;
        var jumpButton;
        jumpTimer = 10;
        var fairy;
        var candy;
        var candies;
        var cursors;
        var button;
        var rightanim;
        var leftanim;
        var scoreText;
        var highScoreText;
        var gameoverimg;
        var button;
        var music;
        var enter_enable=false;
        var enterKey1;
        score = 0;
        highScore = 0;
		
};

var playMode = false;
var oneKill;

level2.prototype = {
        create: function() {
            
            oneKill = false;
            enter_enable=false;
            
        //TAUSTA JA MAA
            this.game.stage.backgroundColor = "#4488AA";

            //otetaan csv-taso käyttöön ja määritetään yhden tilen kooksi 70x70 pikseliä
            map = this.game.add.tilemap('map2', 70, 70);
            map.addTilesetImage('tileset');
            layer = map.createLayer(0);
            layer.resizeWorld();
            //asetetaan tileset.png tiedoston 54 ensimmäistä tileä "seinäksi" ja loput tilesetin kuvat ovat ainostaan taustaa
            map.setCollisionBetween(1, 11);
            map.setCollisionBetween(13, 54);
            //lisäys: kerää omena(tileset id on 12)
            map.setTileIndexCallback(12, this.collectTooth, this);
            //pohjan candy canet tappaa
            map.setTileIndexCallback([93, 96], this.endGame1, this);

            //kerää karkki koordinaatista 2,2 (origo (0,0) on kartan vasemmassa ylänurkassa)
            map.setTileLocationCallback(2, 2, 1, 1, this.collectTooth, this);
            
            map.setTileIndexCallback(84, this.WinLevel, this);  //tilemap temptooth2, fairy loaded from https://opengameart.org/content/fairy#comment-form
            

            
        //PELIHAHMO
            fairy = this.game.add.sprite(70, 750, 'fairy');
            
            //Hahmon animaatio
            //https://phaser.io/examples/v2/animation/two-frame-test
            rightanim = fairy.animations.add('rightanim', [0,1,2,3], 10, true);
            leftanim = fairy.animations.add('leftanim', [4,5,6,7], 10, true);


        //PELIN FYSIIKAT
            this.game.physics.enable(fairy);
            
            fairy.body.bounce.set(0);
            fairy.body.tilePadding.set(32);

            this.game.camera.follow(fairy);

            this.game.physics.arcade.gravity.y = 850;


        //OHJAUS    
            //otetaan nuolinäppäimet käyttöön
            cursors = this.game.input.keyboard.createCursorKeys();
            //hyppynappula on spacebar
            jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            
            //jos tulee game over niin painamlla enteriä pääse jatkamaan
            enterKey1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            
        //peikot
            peikot = this.game.add.group();
            peikot.enableBody = true;
            peikot.physicsBodyType = Phaser.Physics.ARCADE;   
            
            for (var i = 0; i < 10; i++)
            {
                var peikko = peikot.create(this.game.world.randomX, Math.random() * 500, 'otus');
                peikko.body.velocity.set(this.game.rnd.integerInRange(-200, 200), 0);
                peikko.name = 'otus' + i;
            }
            peikot.setAll('body.collideWorldBounds', true);
            peikot.setAll('body.allowGravity', true);
            peikot.setAll('body.bounce.x', 1);
            peikot.setAll('body.bounce.y', 0);
            
            peikot.callAll('animations.add', 'animations', 'moveRight', [0,1,2,3], 10, true);
            peikot.callAll('animations.add', 'animations', 'moveLeft', [4,5,6,7], 10, true);

                        
            
        //LENTOKARKKI
            //karkki piti laittaa ryhmään että sain overlap:n toimimaan  
            candies = this.game.add.group();
            candies.enableBody = true;
            candies.physicsBodyType = Phaser.Physics.ARCADE;
            candy = candies.create(450,300, 'candy');
            candy.animations.add('fly');
            candy.animations.play('fly', 20, true);
            
            //cnd.body.setSize(10, 10, 49, 30);
            //game.physics.enable([otus, cnd], Phaser.Physics.ARCADE);

           //Lentokarkin animaatio
            var candyTween = this.game.add.tween(candy);
            //tässä vain tweenataan useampi x+y koordinaatti yhdistelmä 700+100, 950+300,...
            candyTween.to({x:[700, 950, 700, 450], y:[200, 400, 700, 300]}, 4000, 'Linear', true, 10, -1, false);
            candyTween.interpolation(Phaser.Math.catmullRomInterpolation); //tämä olisi luomaan kaareva lentorata

            candies.setAll('body.allowGravity', false);

        
        //SCORE JA HIGH SCORE
        scoreText = this.game.add.text(16, 16, 'Score: ' + score, {fontSize: '32px', fill: '#ffd93d'});
        scoreText.fixedToCamera = true;
        scoreText.cameraOffset.setTo(16, 16);
        
        highScoreText = this.game.add.text(16, 48, 'High Score: ' + highScore, {fontSize: '32px', fill: '#ffd93d'});
        highScoreText.fixedToCamera = true;
        highScoreText.cameraOffset.setTo(16, 48);
        
        
        
        //VOLYYMIT
        music = this.game.add.audio('bg_music');
        music.play();
        music.loopFull();

        jump_snd = this.game.add.audio('jump_snd');
        end_snd = this.game.add.audio('end_snd');
        collect_snd = this.game.add.audio('collect_snd');
        levelup_snd = this.game.add.audio('levelup_snd');
        
       
        var mute_button = this.game.add.button(this.game.world.camera.x+1150, this.game.world.camera.y+20, 'mute', this.muteBgSnd, this, 2, 1, 0);
        mute_button.fixedToCamera = true;

        },



        update: function() {
            
            //Lisää collision boksin elementin päälle
            this.game.debug.spriteBounds(candies);
            this.game.debug.spriteBounds(fairy);
            
            this.game.physics.arcade.collide(peikot, layer); 

            this.game.physics.arcade.collide(fairy, layer);
            this.game.physics.arcade.overlap(fairy, candies, this.endGame, null, this);
            this.game.physics.arcade.overlap(fairy, peikot, this.endGame, null, this);

            peikot.callAll('animations.play', 'animations', 'moveRight');

        //OHJAUS
        
            //jos painaa enteriä niin peli alkaa alusta
            if(enterKey1.isDown&&enter_enable){
                music.stop();
                this.state.restart(); 
            }
            //Hyppy
            if (jumpButton.isDown && fairy.body.onFloor(true) && this.game.time.now > jumpTimer) {
                fairy.body.velocity.y = -500;
                jumpTimer = this.game.time.now + 750;
                jump_snd.play();
            }
            
            //Vasen
            if (cursors.left.isDown) {
                if(fairy.x>0) {
                    if (fairy.body.onFloor(false)){
                        fairy.body.velocity.x = -250;
                        fairy.play('leftanim');
                    }
                    else { 
                        fairy.body.velocity.x = -150; 
                        fairy.play('leftanim');
                    }
                }
                else {
                    fairy.body.velocity.x = 0;
                }
            }
            //Oikea
            else if (cursors.right.isDown) {
                if(fairy.x<this.game.world.width-32) {
                    if (fairy.body.onFloor(false)){
                        fairy.body.velocity.x = 250;
                        fairy.play('rightanim');
                    }
                    else { 
                        fairy.body.velocity.x = 150;
                        fairy.play('rightanim');
                    }
                }
                else {
                    fairy.body.velocity.x=0;
                }
            }
            //Pysähdy
            else {fairy.animations.stop();}
            if(cursors.left.isUp && cursors.right.isUp)
                fairy.body.velocity.x = 0;

        },
        
                //PISTEIDEN KERÄILY
        collectTooth: function(fairy, tile) {
            if (fairy.key == 'fairy'){
                if (tile.alpha==1){
                    score += 10;
                    scoreText.text = 'Score: ' + score;
                    collect_snd.play();
                    
                }
                tile.alpha = 0;
                layer.dirty = true;
                return false;
            }
        },
        
        
        WinLevel: function(fairy, tile) {
            if (fairy.key == 'fairy'){
                if (score>150){
                    levelup_snd.play();
                    music.stop();
                    score += 10;
                    scoreText.text = 'Score: ' + score;
                    this.state.start("level3");
                }
            }
         },
        
        muteBgSnd: function(){
            playMode =! playMode;
            if (playMode==true) {
                music.pause();
            }
            else {
                music.resume();
            }
        },
        
        //GAME OVER -FUNKTIO
        endGame: function(fairy, candy) {
            if (fairy.key == 'fairy'){
                if (oneKill == false){
                    oneKill =! oneKill;
                    if (oneKill == true){
                        end_snd.play();
                        //tween.to(properties [, duration] [, ease] [, autoStart] [, delay] [, repeat] [, yoyo])
                        var killTween = this.game.add.tween(fairy).to( { alpha: 0 }, 200, null, true, 0, 5, false);
                        music.stop();
                        fairy.body.velocity.x = 0;
                        fairy.body.velocity.y = 0;
                        fairy.body.allowGravity = false;
                        killTween.onComplete.add(this.killFairy, this);
                        killTween.onComplete.add(this.enterEnable, this);
                    }
                }
            }
        },
        
        endGame1: function(fairy, tile) {
            if (fairy.key == 'fairy'){
                if (oneKill == false){
                    oneKill =! oneKill;
                    if (oneKill == true){
                        end_snd.play();
                        //tween.to(properties [, duration] [, ease] [, autoStart] [, delay] [, repeat] [, yoyo])
                        var killTween = this.game.add.tween(fairy).to( { alpha: 0 }, 200, null, true, 0, 5, false);
                        music.stop();
                        fairy.body.velocity.x = 0;
                        fairy.body.velocity.y = 0;
                        fairy.body.allowGravity = false;
                        killTween.onComplete.add(this.killFairy, this);
                        killTween.onComplete.add(this.enterEnable, this);
                    }
                }
            }
        },
        
        killFairy: function(){
            fairy.kill();
            
            music.stop()
            //Score High Scoreksi
            if(score > highScore){
                highScore=score;
                highScoreText.text = 'High Score: ' + highScore;
            }
            
            //Nollataan score
            score=0;
            //Game Over ja Restart -nappi
            gameoverimg = this.game.add.image(this.game.world.camera.x+515, this.game.world.camera.y+260, 'gameover');
            button = this.game.add.button(this.game.world.camera.x+545, this.game.world.camera.y+360, 'restart', this.restart, this, 2, 1, 0);

        },
        
        enterEnable: function(){enter_enable=true;},
        
        restart: function() {
            music.stop()
            this.state.restart(); 
            
        }
};