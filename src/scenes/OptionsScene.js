import Phaser from "phaser";

export default class OptionsScene extends Phaser.Scene {
    constructor() {
        super("Options");
    }

    create() {
        this.model = this.sys.game.globals.model;

        var bg_plain = this.add.image(270, 480, "bg_plain");
        var logo = this.add.image(270, 150, "logo");
        logo.setDepth(1);

        this.music_btn = this.add.image(100, 360, "check_btn");
        this.music_btn.setInteractive();
        this.music_text = this.add.text(130, 340, "Music Enabled", {
            fontSize: 40,
        });

        this.sound_btn = this.add.image(100, 510, "check_btn");
        this.sound_btn.setInteractive();
        this.sound_text = this.add.text(130, 490, "Sound Enabled", {
            fontSize: 40,
        });

        this.music_btn.on(
            "pointerdown",
            function () {
                this.model.musicOn = !this.model.musicOn;
                this.updateAudio();
            }.bind(this)
        );

        this.sound_btn.on(
            "pointerdown",
            function () {
                this.model.soundOn = !this.model.soundOn;
                this.updateAudio();
            }.bind(this)
        );

        var menu = this.add.image(270, 810, "menu_btn");
        menu.setInteractive();
        menu.on(
            "pointerdown",
            function () {
                this.scene.start("Menu");
            },
            this
        );

        this.updateAudio();
    }

    updateAudio() {
        if (this.model.musicOn === false) {
            this.music_btn.setTexture("clear_btn");
            this.music_text.setText("Music Disabled");
            this.sys.game.globals.bgMusic.stop();
            this.model.bgMusicPlaying = false;
        } else {
            this.music_btn.setTexture("check_btn");
            this.music_text.setText("Music Enabled");
            if (this.model.bgMusicPlaying === false) {
                this.sys.game.globals.bgMusic.play();
                this.model.bgMusicPlaying = true;
            }
        }
        if (this.model.soundOn === false) {
            this.sound_btn.setTexture("clear_btn");
            this.sound_text.setText("Sound Disabled");
        } else {
            this.sound_btn.setTexture("check_btn");
            this.sound_text.setText("Sound Enabled");
        }
    }
}
