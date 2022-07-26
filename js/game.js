var bg_plain;
var pos_target_num;
var pos_buttons;
var timeText;
var totalText;
var scoreText;
var time = 0;
var total = 0;
var score = 0;
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
var retry;
var info;
var upperLimit;
var displayValue = 0;
var display;
var target; 

window.onload = function() {
	var config = {
		type: Phaser.AUTO,
		parent: 'phaser-example',
		width: 540,
		height: 960,
		scene: [bootGame, gameScreen]
	};
	game = new Phaser.Game(config);
	window.focus();
	resizeGame();
	window.addEventListener("resize", resizeGame);
}

class bootGame extends Phaser.Scene {
	constructor() {
		super("BootGame");
	}

    preload() {
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2 - 70, 320, 50);

        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 100,
            text: 'Loading...',
            style: {
                font: '30px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 45,
            text: '0%',
            style: {
                font: '25px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.image("logo", "assets/images/logo.png");
        this.load.image("bg_plain", "assets/images/bg_plain.png");
        this.load.image("pos_target_num", "assets/images/pos_target_num.png");
        this.load.image("pos_buttons", "assets/images/pos_buttons.png");
        this.load.atlas('atlas', 'assets/images/texture.png', 'assets/images/texture.json');

        this.load.on('progress', function(value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width / 2 - 150, height / 2 - 60, 300 * value, 30);
            percentText.setText(parseInt(value * 100) + '%');
        });

        this.load.on('complete', function() {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }

    create() {
        var logo = this.add.image(270, 480, "logo");
        logo.setDepth(1);
        var bg_plain = this.add.image(270, 480, "bg_plain");
        var timer = this.time.delayedCall(0, this.switchScreen, [], this);
    }

    switchScreen() {
        this.scene.start("GameScreen");
    }
}

class gameScreen extends Phaser.Scene {
	constructor() {
		super("GameScreen");
	}
    
    create() {
        bg_plain = this.add.image(270, 480, "bg_plain");
        pos_target_num = this.add.image(270, 480, "pos_target_num");
        pos_buttons = this.add.image(270, 480, "pos_buttons");
        timeText = this.add.text(20, 50, 'Time: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
		totalText = this.add.text(170, 50, 'Total: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
		scoreText = this.add.text(340, 50, 'Score: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
        one = this.add.sprite(140, 660, 'atlas', '1-over.png');
        two = this.add.sprite(60, 550, 'atlas', '2-over.png');
        three = this.add.sprite(60, 410, 'atlas', '3-over.png');
        four = this.add.sprite(140, 300, 'atlas', '4-over.png');
        five = this.add.sprite(270, 260, 'atlas', '5-over.png');
        six = this.add.sprite(400, 300, 'atlas', '6-over.png');
        seven = this.add.sprite(480, 410, 'atlas', '7-over.png');
        eight = this.add.sprite(480, 550, 'atlas', '8-over.png');
        nine = this.add.sprite(400, 660, 'atlas', '9-over.png');
        clear = this.add.sprite(270, 700, 'atlas', 'clear-red.png');
        target = this.add.sprite(270, 480, 'atlas', '0-display.png');
        pause = this.add.sprite(270, 870, 'atlas', 'pause_button.png');
        pause.setScale(2);
        pause.setInteractive();
        pause.setVisible(false);
        start = this.add.sprite(270, 870, 'atlas', 'start_button.png');
        start.setScale(2);
        start.setInteractive();
        start.on('pointerdown', () => {
            startGame();
        });        
        retry = this.add.sprite(100, 860, 'atlas', 'retry_b.png');
        info = this.add.sprite(450, 860, 'atlas', 'info_b.png');
    }
}

function startGame() {
    pause.visible = true;
	start.visible = false;

    clearButtons();
    changeTargetNumber();
}

function clearButtons() {
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

function changeTargetNumber() {
    upperLimit = getUpperLimit(score);
	displayValue = Math.floor(Math.random() * upperLimit) + 1;
	display = displayValue.toString() + "-display.png";
	target.visible = true;
	target.setFrame(display);
}

function getUpperLimit(score) {
    if (score >= 0 || score < 50) {
		return 15;
	}
	else if (score >= 50 || score < 100) {
		return 25;
	}
	else {
		return 35;
	}
}

function resizeGame() {
	var canvas = document.querySelector("canvas");
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var windowRatio = windowWidth / windowHeight;
	var gameRatio = game.config.width / game.config.height;
	if (windowRatio < gameRatio) {
		canvas.style.width = windowWidth + "px";
		canvas.style.height = (windowWidth / gameRatio) + "px";
	}
	else {
		canvas.style.width = (windowHeight * gameRatio) + "px";
		canvas.style.height = windowHeight + "px";
	}
}