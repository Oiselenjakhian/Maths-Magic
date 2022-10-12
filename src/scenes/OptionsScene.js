import Phaser from "phaser";

export default class OptionsScene extends Phaser.Scene {
    constructor() {
        super("Options");
    }

    create() {
        var bg_plain = this.add.image(270, 480, "bg_plain");
        var logo = this.add.image(270, 150, "logo");
        logo.setDepth(1);
    }
}
