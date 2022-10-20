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
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                one.setFrame("1-over.png");
                one.removeInteractive();
            }
        });
        two = this.add.sprite(60, 550, "atlas", "2-over.png");
        two.on("pointerdown", () => {
            total = total + 2;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                two.setFrame("2-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                two.setFrame("2-over.png");
                two.removeInteractive();
            }
        });
        three = this.add.sprite(60, 410, "atlas", "3-over.png");
        three.on("pointerdown", () => {
            total = total + 3;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                three.setFrame("3-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                three.setFrame("3-over.png");
                three.removeInteractive();
            }
        });
        four = this.add.sprite(140, 300, "atlas", "4-over.png");
        four.on("pointerdown", () => {
            total = total + 4;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                four.setFrame("4-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                four.setFrame("4-over.png");
                four.removeInteractive();
            }
        });
        five = this.add.sprite(270, 260, "atlas", "5-over.png");
        five.on("pointerdown", () => {
            total = total + 5;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                five.setFrame("5-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                five.setFrame("5-over.png");
                five.removeInteractive();
            }
        });
        six = this.add.sprite(400, 300, "atlas", "6-over.png");
        six.on("pointerdown", () => {
            total = total + 6;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                six.setFrame("6-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                six.setFrame("6-over.png");
                six.removeInteractive();
            }
        });
        seven = this.add.sprite(480, 410, "atlas", "7-over.png");
        seven.on("pointerdown", () => {
            total = total + 7;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                seven.setFrame("7-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                seven.setFrame("7-over.png");
                seven.removeInteractive();
            }
        });
        eight = this.add.sprite(480, 550, "atlas", "8-over.png");
        eight.on("pointerdown", () => {
            total = total + 8;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                eight.setFrame("8-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                eight.setFrame("8-over.png");
                eight.removeInteractive();
            }
        });
        nine = this.add.sprite(400, 660, "atlas", "9-over.png");
        nine.on("pointerdown", () => {
            total = total + 9;
            totalText.setText("Total: " + total.toString());
            if (this.model.soundOn) {
                this.clickSound.play();
            }

            if (total == displayValue) {
                nine.setFrame("9-over.png");
                if (this.model.soundOn) {
                    this.bubbleSound.play();
                }
                countdown.reset();
                this.updateHUD();
            } else {
                nine.setFrame("9-over.png");
                nine.removeInteractive();
            }
        });
        clear = this.add.sprite(270, 700, "atlas", "clear-red.png");
        clear.on("pointerdown", () => {
            this.clearButtons();
            this.clearTotal();
        });
        target = this.add.sprite(270, 480, "atlas", "0-display.png");
        pause = this.add.sprite(270, 870, "atlas", "pause_button.png");
        pause.setScale(2);
        pause.setInteractive();
        pause.setVisible(false);
        pause.on("pointerdown", () => {
            this.pauseGame();
        });
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
        yesButton.setInteractive();
        yesButton.setDepth(2);
        yesButton.on("pointerdown", () => {
            reloadScreen.visible = false;
            yesButton.visible = false;
            noButton.visible = false;
            this.restartGame();
        });
        noButton = this.add.image(350, 500, "no_btn");
        noButton.visible = false;
        noButton.setInteractive();
        noButton.setDepth(2);
        noButton.on("pointerdown", () => {
            reloadScreen.visible = false;
            yesButton.visible = false;
            noButton.visible = false;
            countdown.start();
        });
        retry = this.add.sprite(100, 860, "atlas", "retry_b.png");
        retry.setInteractive();
        retry.on("pointerdown", () => {
            reloadScreen.visible = true;
            yesButton.visible = true;
            noButton.visible = true;
            countdown.pause();
        });
        instructionsOverlay = this.add.image(270, 480, "instructions");
        instructionsOverlay.visible = false;
        instructionsOverlay.setInteractive();
        instructionsOverlay.on("pointerdown", () => {
            instructionsOverlay.visible = false;
            countdown.start();
        });
        info = this.add.sprite(450, 860, "atlas", "info_b.png");
        info.setInteractive();
        info.on("pointerdown", () => {
            instructionsOverlay.visible = true;
            countdown.pause();
        });
        pausedOverlay = this.add.image(270, 480, "paused");
        pausedOverlay.visible = false;
        pausedOverlay.setInteractive();
        pausedOverlay.on("pointerdown", () => {
            this.startPausedGame();
        });
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

    restartGame() {
        pause.visible = false;
        start.visible = true;
        this.resetButtons();
        this.resetTargetNumber();
        countdown.reset();
        time = 0;
        timeText.setText("Time: " + time.toString());
        total = 0;
        totalText.setText("Total: " + total.toString());
        score = 0;
        scoreText.setText("Score: " + score.toString());
    }

    startPausedGame() {
        playGame = true;
        countdown.start();
        pausedOverlay.visible = false;
    }

    pauseGame() {
        playGame = false;
        countdown.pause();
        pausedOverlay.visible = true;
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

    resetButtons() {
        one.setFrame("1-over.png");
        two.setFrame("2-over.png");
        three.setFrame("3-over.png");
        four.setFrame("4-over.png");
        five.setFrame("5-over.png");
        six.setFrame("6-over.png");
        seven.setFrame("7-over.png");
        eight.setFrame("8-over.png");
        nine.setFrame("9-over.png");
        clear.setFrame("clear-red.png");

        this.removeAllInteractive();
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

    resetTargetNumber() {
        target.setFrame("0-display.png");
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
            return 10;
        } else if (score >= 100 && score < 150) {
            return 10;
        } else if (score >= 150 && score < 200) {
            return 10;
        } else {
            return 10;
        }
    }
}
