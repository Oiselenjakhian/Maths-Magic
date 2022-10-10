import Phaser from "phaser";

class MyGame extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {}

    create() {}
}

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        parent: "phaser-example",
        width: 540,
        height: 960,
        scene: MyGame,
    };

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

    const game = new Phaser.Game(config);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
};
