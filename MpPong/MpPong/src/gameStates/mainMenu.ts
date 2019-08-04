module PhaserTSTemplate.Client {

    export class MainMenu extends Phaser.State {
        
        background: Phaser.Sprite;
        logo: Phaser.Sprite;

        create() { //Adds a background and a logo that springs in, that requires a click to begin the game.
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5);

            this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 500);

            this.game.debug.text("Click the logo to start the game", 0, this.world.height, "red");
            //After clicking fade the logo out, and play the fadeOut function
            this.input.onDown.addOnce(this.fadeOut, this);
        }

        fadeOut() { //Play some noise and on anim complete play the startGame func
            this.add.audio('click', 1, false).play();
            
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() { //Finally starts our first level scene
            this.game.state.start('Level01', true, false);
        }

    }

}