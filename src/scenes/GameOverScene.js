import Phaser from "phaser";

export default class OptionsScene extends Phaser.Scene {
    constructor() {
        super("GameOver");
    }

    init(data) {
        this.score = data.score;
    }

    create() {
        var gameEnd = this.add.image(270, 480, "gameOver");
        var timeText = this.add.text(
            150,
            275,
            "Score: " + this.score.toString(),
            {
                fontSize: "60px",
                fill: "#fff",
                fontFamily: "roboto-slab, serif",
            }
        );
        var replay = this.add.image(150, 675, "replayBtn");
        replay.setInteractive();
        replay.on(
            "pointerdown",
            function () {
                this.scene.start("Game");
            },
            this
        );
        var tweet = this.add.image(390, 675, "tweetBtn");
        tweet.setInteractive();
        tweet.on("pointerdown", this.handleShareScore, this);
    }

    handleShareScore() {
        var text = "I scored " + this.score + " in Maths Magic.";
        var url = "https://twitter.com/intent/tweet";
        url += "?text=" + text;
        this.openURL(url);
    }

    openURL(url) {
        window.open(url, "_blank");
    }
}
