module PhaserTSTemplate.Client {
/* NO NEED TO EDIT GAME.JS(.MAP) THOSE FILES ARE AUTO GENERATED FROM HERE */
    export class GameEngine extends Phaser.Game {

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);
            //Reminder that IF the Game States are not under the same module (PhaserTSTemplate)
            //Then we will have errors here stating that they cannot be found
            //The auto generate game.js(.map) files wont be made and nothing will work
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level01', Level01, false);

            this.state.start('Boot');//Auto start the Boot scene upon load
        }
    }
}

window.onload = () => {
    new PhaserTSTemplate.Client.GameEngine();
};