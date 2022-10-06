var game;
var aboutOverlay;
var instructionsOverlay;
var bg_plain;
var pos_target_num;
var pos_buttons;
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

/*
* Load the game in the browser
*/
window.onload = function () {
    // Configuration
    var config = {
        type: Phaser.AUTO,
        parent: "phaser-example",
        width: 540,
        height: 960,
        scene: [bootGame, menuScreen, gameScreen],
    };
    
    // Assign game to its Phaser.Game instance
    game = new Phaser.Game(config);

    // Set focus to the current window
    window.focus();

    // Call the resize function
    resizeGame();

    // Call the resize function every time the window is resized
    window.addEventListener("resize", resizeGame);
};

/*
* Boot class to load the assets
*/
class bootGame extends Phaser.Scene {
    // Class constructor
    constructor() {
        super("BootGame");
    }

    /*
    * Preload function
    */
    preload() {
        // Get the width of the canvas
        var width = this.cameras.main.width;

        // Get the height of the canvas
        var height = this.cameras.main.height;

        // Define your progress bar
        var progressBar = this.add.graphics();

        // Define your progress box
        var progressBox = this.add.graphics();

        // Define the progress box fill style
        progressBox.fillStyle(0x222222, 0.8);

        // Define the progress box rectangle
        progressBox.fillRect(width / 2 - 160, height / 2 - 70, 320, 50);

        /*
        * Define the loading text
        */
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 100,
            text: "Loading...",
            style: {
                font: "30px monospace",
                fill: "#ffffff",
            },
        });

        // Set the origin of the loading text
        loadingText.setOrigin(0.5, 0.5);

        /*
        * Define the percent text
        */
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 45,
            text: "0%",
            style: {
                font: "25px monospace",
                fill: "#ffffff",
            },
        });

        // Set the origin of the percent text
        percentText.setOrigin(0.5, 0.5);

        /*
         * Preload the images, spritesheet, music and sounds
        */
        this.load.image("logo", "assets/images/logo.png");
        this.load.image("bg_plain", "assets/images/bg_plain.png");
        this.load.image("pos_target_num", "assets/images/pos_target_num.png");
        this.load.image("pos_buttons", "assets/images/pos_buttons.png");
        this.load.image("gameOver", "assets/images/game-over.png");
        this.load.image("paused", "assets/images/pause-overlay.png");
        this.load.image("play_btn", "assets/images/play.png");
        this.load.image("about_btn", "assets/images/about.png");
        this.load.image("instructions_btn", "assets/images/instructions.png");
        this.load.image("click_start", "assets/images/click.png");
        this.load.image(
            "instructions",
            "assets/images/instructions-overlay.png"
        );
        this.load.image("aboutOverlay", "assets/images/aboutOverlay.png");
        this.load.image("reload_screen", "assets/images/reload.png");
        this.load.image("yes_btn", "assets/images/yes.png");
        this.load.image("no_btn", "assets/images/no.png");
        this.load.atlas(
            "atlas",
            "assets/images/texture.png",
            "assets/images/texture.json"
        );
        this.load.audio("background_music", "assets/sounds/background.mp3");
        this.load.audio("click", "assets/sounds/click.ogg");
        this.load.audio("bubble", "assets/sounds/bubble.ogg");
        this.load.audio("startgame", "assets/sounds/startgame.wav");

        /*
        * Increase the size of the progress bar as the assets are loaded
        */
        this.load.on("progress", function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(
                width / 2 - 150,
                height / 2 - 60,
                300 * value,
                30
            );
            percentText.setText(parseInt(value * 100) + "%");
        });

        /*
        * Destroy all elements of the loading screen
        */
        this.load.on("complete", function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });
    }

    /*
    * Display the start screen
    */
    create() {
        // Display the plain background image
        var bg_plain = this.add.image(270, 480, "bg_plain");

        // Display the logo
        var logo = this.add.image(270, 480, "logo");

        // Display the instructions
        var click = this.add.image(270, 240, "click_start");

        /*
        * Go to the menu screen once the screen is clicked
        */
        this.input.once(
            "pointerdown",
            function () {
                this.scene.start("MenuScreen");
            },
            this
        );
    }
}

/*
* Menu class for the menu screen
*/
class menuScreen extends Phaser.Scene {
    // Class constructor
    constructor() {
        super("MenuScreen");
    }

    /*
    * Create the menu and play music
    */
    create() {
        // Define the music
        var music = this.sound.add("background_music");

        // Play the music
        music.play({ loop: true, volume: 0.15 });

        // Define the plain background
        var bg_plain = this.add.image(270, 480, "bg_plain");

        // Define the logo
        var logo = this.add.image(270, 150, "logo");

        // Set the z index of the logo
        logo.setDepth(1);

        // Define the play button
        var play = this.add.image(270, 360, "play_btn");

        // Make the play button interactive
        play.setInteractive();

        // Go to the game screen
        play.on(
            "pointerdown",
            function () {
                this.scene.start("GameScreen");
            },
            this
        );

        // Define the about overlay
        aboutOverlay = this.add.image(270, 480, "aboutOverlay");

        // Set the z index of the about overlay
        aboutOverlay.setDepth(1);

        // Make it invisible
        aboutOverlay.visible = false;

        // Make it interactive
        aboutOverlay.setInteractive();

        // Make the about overlay invisible when it is clicked
        aboutOverlay.on("pointerdown", function () {
            aboutOverlay.visible = false;
        });

        // Define the about button
        var about = this.add.image(270, 540, "about_btn");

        // Make it interactive
        about.setInteractive();

        // Display the about overlay when the about button is clicked
        about.on("pointerdown", () => {
            aboutOverlay.visible = true;
        });

        // Define the instructions overlay
        instructionsOverlay = this.add.image(270, 480, "instructions");

        // Set the z index
        instructionsOverlay.setDepth(1);

        // Make the instructions overlay invisible
        instructionsOverlay.visible = false;

        // Make the instructions overlay interactive
        instructionsOverlay.setInteractive();

        // Make the instructions overlay invisible when it is clicked by the user
        instructionsOverlay.on("pointerdown", function () {
            instructionsOverlay.visible = false;
        });

        // Define the instructions button
        var instructions = this.add.image(270, 720, "instructions_btn");

        // Make the instructions button invisible
        instructions.setInteractive();

        // Make the instruction overlay visible when the instructions button is clicked
        instructions.on("pointerdown", () => {
            instructionsOverlay.visible = true;
        });
    }
}

/*
* Game class for the game screen
*/
class gameScreen extends Phaser.Scene {
    // Class constructor
    constructor() {
        super("GameScreen");
    }

    /*
    * Create the game screen
    */
    create() {
        // Define the click sound
        this.clickSound = this.sound.add("click");

        // Define the bubble sound
        this.bubbleSound = this.sound.add("bubble");

        // Define the sound to start the game
        this.startGameSound = this.sound.add("startgame");

        /*
        * Assemble the user interface
        */
        bg_plain = this.add.image(270, 480, "bg_plain");
        pos_target_num = this.add.image(270, 480, "pos_target_num");
        pos_buttons = this.add.image(270, 480, "pos_buttons");

        // Display the number one
        one = this.add.sprite(140, 660, "atlas", "1-over.png");

        // Display the number two
        two = this.add.sprite(60, 550, "atlas", "2-over.png");

        // Display the number three
        three = this.add.sprite(60, 410, "atlas", "3-over.png");

        // Display the number four
        four = this.add.sprite(140, 300, "atlas", "4-over.png");

        // Display the number five
        five = this.add.sprite(270, 260, "atlas", "5-over.png");

        // Display the number siz
        six = this.add.sprite(400, 300, "atlas", "6-over.png");

        // Display the number seven
        seven = this.add.sprite(480, 410, "atlas", "7-over.png");

        // Display the number eight
        eight = this.add.sprite(480, 550, "atlas", "8-over.png");

        // Display the number nine
        nine = this.add.sprite(400, 660, "atlas", "9-over.png");

        // Display the clear button
        clear = this.add.sprite(270, 700, "atlas", "clear-red.png");

        // Display the target number
        target = this.add.sprite(270, 480, "atlas", "0-display.png");

        // Display the pause button
        pause = this.add.sprite(270, 870, "atlas", "pause_button.png");

        // Increase the size of the pause button by two
        pause.setScale(2);

        // Make the pause button invisible
        pause.setVisible(false);

        // Display the start button
        start = this.add.sprite(270, 870, "atlas", "start_button.png");

        // Increase the size of the start button by two
        start.setScale(2);

        // Display the retry button
        retry = this.add.sprite(100, 860, "atlas", "retry_b.png");

        // Display the information button
        info = this.add.sprite(450, 860, "atlas", "info_b.png");
    }
}

/*
* Function to resize the canvas
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
