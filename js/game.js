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
    }
}

class gameScreen extends Phaser.Scene {
	constructor() {
		super("GameScreen");
	}
    
    create() {

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