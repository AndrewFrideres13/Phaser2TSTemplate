module PhaserTSTemplate.Client {

    export class Level01 extends Phaser.State {
        //We can create these variables to expose them to this class
        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;

        create() { //Start the physics system since we need it now, add the BG and player sprite,
        //and create the player (defined in player.ts) and allow for action
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.background = this.add.sprite(0, 0, 'level01-sprites','background');
            this.player = new Player(this.game, this.world.centerX, this.world.centerX);
            this.player.anchor.setTo(0, 5);

            this.game.debug.text("Use Right and Left arrow keys to move the bat", 0, this.world.height, "red");
        }

    }

}