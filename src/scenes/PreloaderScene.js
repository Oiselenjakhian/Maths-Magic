import Phaser from "phaser";
import musicFile from "../assets/sounds/background.mp3";
import clickSound from "../assets/sounds/click.ogg";
import bubbleSound from "../assets/sounds/bubble.ogg";
import startSound from "../assets/sounds/startgame.wav";

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        // Add the logo image
        this.add.image(270, 330, "logo");

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 + 60, 320, 50);

        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 + 30,
            text: "Loading...",
            style: {
                font: "30px monospace",
                fill: "#ffffff",
            },
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 + 85,
            text: "0%",
            style: {
                font: "25px monospace",
                fill: "#ffffff",
            },
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.image("bg_plain", require("../assets/images/bg_plain.png"));
        this.load.image(
            "pos_target_num",
            require("../assets/images/pos_target_num.png")
        );
        this.load.image(
            "pos_buttons",
            require("../assets/images/pos_buttons.png")
        );
        this.load.image("gameOver", require("../assets/images/game-over.png"));
        this.load.image(
            "paused",
            require("../assets/images/pause-overlay.png")
        );
        this.load.image("play_btn", require("../assets/images/play.png"));
        this.load.image("about_btn", require("../assets/images/about.png"));
        this.load.image(
            "instructions_btn",
            require("../assets/images/instructions.png")
        );
        this.load.image("options_btn", require("../assets/images/options.png"));
        this.load.image("check_btn", require("../assets/images/blue_box.png"));
        this.load.image("clear_btn", require("../assets/images/grey_box.png"));
        this.load.image("menu_btn", require("../assets/images/menu.png"));
        this.load.image(
            "instructions",
            require("../assets/images/instructions-overlay.png")
        );
        this.load.image(
            "aboutOverlay",
            require("../assets/images/aboutOverlay.png")
        );
        this.load.image(
            "reload_screen",
            require("../assets/images/reload.png")
        );
        this.load.image("yes_btn", require("../assets/images/yes.png"));
        this.load.image("no_btn", require("../assets/images/no.png"));
        this.load.atlas(
            "atlas",
            require("../assets/images/texture.png"),
            require("../assets/images/texture.json")
        );
        this.load.audio("background_music", musicFile);
        this.load.audio("click", clickSound);
        this.load.audio("bubble", bubbleSound);
        this.load.audio("startgame", startSound);

        this.load.on("progress", function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(
                width / 2 - 150,
                height / 2 + 70,
                300 * value,
                30
            );
            percentText.setText(parseInt(value * 100) + "%");
        });

        this.load.on("complete", function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }

    create() {
        this.scene.start("Menu");
    }
}
