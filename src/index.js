import Phaser from "phaser";
import config from "./config/config";
import BootScene from "./scenes/BootScene";
import PreloaderScene from "./scenes/PreloaderScene";
import MenuScene from "./scenes/MenuScene";
import OptionsScene from "./scenes/OptionsScene";
import Model from "./Model";

class MyGame extends Phaser.Game {
    constructor() {
        super(config);
        const model = new Model();
        this.globals = { model, bgMusic: null };
        this.scene.add("Boot", BootScene);
        this.scene.add("Preloader", PreloaderScene);
        this.scene.add("Menu", MenuScene);
        this.scene.add("Options", OptionsScene);
        this.scene.start("Boot");
    }
}

var game = new MyGame();

window.onload = function () {
    /**
     * Resize the canvas to always appear in the viewport
     * Credit to Emanuele Feronato
     */
    function resizeGame() {
        var canvas = document.querySelector("canvas");
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio = game.config.width / game.config.height;
        if (windowRatio < gameRatio) {
            canvas.style.width = windowWidth + "px";
            canvas.style.height = windowWidth / gameRatio + "px";
        } else {
            canvas.style.width = windowHeight * gameRatio + "px";
            canvas.style.height = windowHeight + "px";
        }
    }

    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
};
