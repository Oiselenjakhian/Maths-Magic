import Phaser from "phaser";
import Countdown from "../Countdown";

var bg_plain;
var pos_target_num;
var pos_buttons;
var timeText;
var totalText;
var scoreText;
var time = 0;
var total = 0;
var score = 0;
var upperLimit;
var displayValue;
var display;
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
var playGame;
var countdown;
var timeLeft;

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("Game");
        countdown = new Countdown().setDuration(10);
    }

    init() {
        time = 0;
        total = 0;
        score = 0;
        playGame = false;
        countdown.reset();
        timeLeft = countdown.getTimeLeft();
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
        one.on("pointerdown", () => {
            total = total + 1;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                one.setFrame("1-over.png");
                this.removeAllInteractive();
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                this.resetTimer();
                this.updateHUD();
            } else {
                one.setFrame("1-over.png");
                one.removeInteractive();
            }
        });
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
        pause.setInteractive();
        pause.setVisible(false);
        start = this.add.sprite(270, 870, "atlas", "start_button.png");
        start.setScale(2);
        start.setInteractive();
        start.on("pointerdown", () => {
            if (this.model.soundOn) {
                this.startGameSound.play();
            }
            this.startGame();
        });
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

    update() {
        if (playGame) {
            timeLeft = countdown.getTimeLeft();
            timeLeft = Math.ceil(timeLeft);
            timeText.setText("Time: " + timeLeft.toString());
        }

        if (timeLeft == 0) {
            this.scene.start("GameOver", { score: score });
        }
    }

    startGame() {
        pause.visible = true;
        start.visible = false;
        this.changeDisplay();
        playGame = true;
        countdown.start();
    }

    changeDisplay() {
        this.clearButtons();
        this.changeTargetNumber();
    }

    clearButtons() {
        one.setFrame("1.png");
        one.setInteractive();
        two.setFrame("2.png");
        two.setInteractive();
        three.setFrame("3.png");
        three.setInteractive();
        four.setFrame("4.png");
        four.setInteractive();
        five.setFrame("5.png");
        five.setInteractive();
        six.setFrame("6.png");
        six.setInteractive();
        seven.setFrame("7.png");
        seven.setInteractive();
        eight.setFrame("8.png");
        eight.setInteractive();
        nine.setFrame("9.png");
        nine.setInteractive();
        clear.setFrame("clear.png");
        clear.setInteractive();
    }

    changeTargetNumber() {
        upperLimit = this.getUpperLimit(score);
        displayValue = Math.floor(Math.random() * upperLimit) + 1;
        display = displayValue.toString() + "-display.png";
        target.visible = true;
        target.setFrame(display);
    }

    removeAllInteractive() {
        one.removeInteractive();
        two.removeInteractive();
        three.removeInteractive();
        four.removeInteractive();
        five.removeInteractive();
        six.removeInteractive();
        seven.removeInteractive();
        eight.removeInteractive();
        nine.removeInteractive();
        clear.removeInteractive();
    }

    resetTimer() {
        time = this.getTime(score);
        countdown.setDuration(time);
    }

    updateHUD() {
        this.increaseScore();
        this.clearTotal();
        this.changeDisplay();
    }

    increaseScore() {
        score = score + 1;
        scoreText.setText("Score: " + score.toString());
    }

    clearTotal() {
        total = 0;
        totalText.setText("Total: " + total.toString());
    }

    getUpperLimit(score) {
        if (score >= 0 && score < 50) {
            return 15;
        } else if (score >= 50 && score < 100) {
            return 20;
        } else {
            return 30;
        }
    }

    getTime(score) {
        if (score >= 0 && score < 50) {
            return 10;
        } else if (score >= 50 && score < 100) {
            return 8;
        } else if (score >= 100 && score < 150) {
            return 6;
        } else if (score >= 150 && score < 200) {
            return 4;
        } else {
            return 3;
        }
    }
}
