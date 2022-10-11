import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }

    create() {
        var music = this.sound.add("background_music");
        music.play({ loop: true, volume: 0.15 });
        var bg_plain = this.add.image(270, 480, "bg_plain");
        var logo = this.add.image(270, 480, "logo");
        var click = this.add.image(270, 240, "click_start");
        this.input.once(
            "pointerdown",
            function () {
                this.scene.start("Menu");
            },
            this
        );
    }
}
