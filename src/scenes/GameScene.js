import Phaser from "phaser";

var bg_plain;
var pos_target_num;
var pos_buttons;
var timeText;
var totalText;
var scoreText;
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var clear;
var target;
var pause;
var start;
var reloadScreen;
var yesButton;
var noButton;
var retry;
var instructionsOverlay;
var info;
var pausedOverlay;

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
    }

    create() {
        this.model = this.sys.game.globals.model;
        this.clickSound = this.sound.add("click");
        this.bubbleSound = this.sound.add("bubble");
        this.startGameSound = this.sound.add("startgame");

        bg_plain = this.add.image(270, 480, "bg_plain");
        pos_target_num = this.add.image(270, 480, "pos_target_num");
        pos_buttons = this.add.image(270, 480, "pos_buttons");

        timeText = this.add.text(20, 50, "Time: 0", {
            fontSize: "35px",
            fill: "#fff",
            fontFamily: "roboto-slab, serif",
        });
        totalText = this.add.text(170, 50, "Total: 0", {
            fontSize: "35px",
            fill: "#fff",
            fontFamily: "roboto-slab, serif",
        });
        scoreText = this.add.text(340, 50, "Score: 0", {
            fontSize: "35px",
            fill: "#fff",
            fontFamily: "roboto-slab, serif",
        });

        one = this.add.sprite(140, 660, "atlas", "1-over.png");
        two = this.add.sprite(60, 550, "atlas", "2-over.png");
        three = this.add.sprite(60, 410, "atlas", "3-over.png");
        four = this.add.sprite(140, 300, "atlas", "4-over.png");
        five = this.add.sprite(270, 260, "atlas", "5-over.png");
        six = this.add.sprite(400, 300, "atlas", "6-over.png");
        seven = this.add.sprite(480, 410, "atlas", "7-over.png");
        eight = this.add.sprite(480, 550, "atlas", "8-over.png");
        nine = this.add.sprite(400, 660, "atlas", "9-over.png");
        clear = this.add.sprite(270, 700, "atlas", "clear-red.png");
        target = this.add.sprite(270, 480, "atlas", "0-display.png");
        pause = this.add.sprite(270, 870, "atlas", "pause_button.png");
        pause.setScale(2);
        pause.setVisible(false);
        start = this.add.sprite(270, 870, "atlas", "start_button.png");
        start.setScale(2);
        reloadScreen = this.add.image(270, 480, "reload_screen");
        reloadScreen.visible = false;
        reloadScreen.setDepth(1);
        yesButton = this.add.image(180, 500, "yes_btn");
        yesButton.visible = false;
        noButton = this.add.image(350, 500, "no_btn");
        noButton.visible = false;
        retry = this.add.sprite(100, 860, "atlas", "retry_b.png");
        instructionsOverlay = this.add.image(270, 480, "instructions");
        instructionsOverlay.visible = false;
        info = this.add.sprite(450, 860, "atlas", "info_b.png");
        pausedOverlay = this.add.image(270, 480, "paused");
        pausedOverlay.visible = false;
    }
}
