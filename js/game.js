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
        this.load.image("0-display", "assets/images/0-display.png");
        this.load.image("clear-red", "assets/images/clear-red.png");
        this.load.image("1-over", "assets/images/1-over.png");
        this.load.image("2-over", "assets/images/2-over.png");
        this.load.image("3-over", "assets/images/3-over.png");
        this.load.image("4-over", "assets/images/4-over.png");
        this.load.image("5-over", "assets/images/5-over.png");
        this.load.image("6-over", "assets/images/6-over.png");
        this.load.image("7-over", "assets/images/7-over.png");
        this.load.image("8-over", "assets/images/8-over.png");
        this.load.image("9-over", "assets/images/9-over.png");
        this.load.image("start_button", "assets/images/start_button.png");
        this.load.image("retry_b", "assets/images/retry_b.png");
        this.load.image("info_b", "assets/images/info_b.png");

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
        var bg_plain = this.add.image(270, 480, "bg_plain");
        var pos_target_num = this.add.image(270, 480, "pos_target_num");
        var pos_buttons = this.add.image(270, 480, "pos_buttons");
        var target = this.add.image(270, 480, "0-display");
        var clear = this.add.image(270, 700, "clear-red");
        var one = this.add.image(140, 660, "1-over");
        var two = this.add.image(60, 550, "2-over");
        var three = this.add.image(60, 410, "3-over");
        var four = this.add.image(140, 300, "4-over");
        var five = this.add.image(270, 260, "5-over");
        var six = this.add.image(400, 300, "6-over");
        var seven = this.add.image(480, 410, "7-over");
        var eight = this.add.image(480, 550, "8-over");
        var nine = this.add.image(400, 660, "9-over");
        var start = this.add.image(270, 870, "start_button");
        start.setScale(2);
        var retry = this.add.image(100, 860, "retry_b");
        var info = this.add.image(450, 860, "info_b");
        var timeText = this.add.text(20, 50, 'Time: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
		var totalText = this.add.text(170, 50, 'Total: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
		var scoreText = this.add.text(340, 50, 'Score: 0', { fontSize: '40px', fill: '#fff', fontFamily: 'roboto-slab' });
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