import Phaser from "phaser";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super("Menu");
    }

    create() {
        var bg_plain = this.add.image(270, 480, "bg_plain");
        var logo = this.add.image(270, 150, "logo");
        logo.setDepth(1);
        var play = this.add.image(270, 360, "play_btn");
        var aboutOverlay = this.add.image(270, 480, "aboutOverlay");
        aboutOverlay.setDepth(1);
        aboutOverlay.visible = false;
        aboutOverlay.setInteractive();
        aboutOverlay.on("pointerdown", function () {
            aboutOverlay.visible = false;
        });
        var about = this.add.image(270, 510, "about_btn");
        about.setInteractive();
        about.on("pointerdown", () => {
            aboutOverlay.visible = true;
        });
        var instructionsOverlay = this.add.image(270, 480, "instructions");
        instructionsOverlay.setDepth(1);
        instructionsOverlay.visible = false;
        instructionsOverlay.setInteractive();
        instructionsOverlay.on("pointerdown", function () {
            instructionsOverlay.visible = false;
        });
        var instructions = this.add.image(270, 660, "instructions_btn");
        instructions.setInteractive();
        instructions.on("pointerdown", () => {
            instructionsOverlay.visible = true;
        });
        var options = this.add.image(270, 810, "options_btn");
    }
}
