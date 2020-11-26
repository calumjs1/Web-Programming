//JavaScript code for PaintBall Combat

//make canvas fit window
canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;

//player
let player;

//arrays  to hold projectiles and keycodes
//by having an array to hold the keycodes it allows keys to function simultaneously
let keys = [];
let projectiles = [];


//when the page loads, setUp the canvas
document.addEventListener('DOMContentLoaded', SetupCanvas);


function SetupCanvas(){
	/**
		Parameters:
		N/A

		Returns;
		N/A

		Description 
		initialises all required information needed on the canvas
	**/

	//get a reference to the canvas
	canvas = document.querySelector('canvas');
	
	//get the context
    c = canvas.getContext('2d');
	
	//size of canvas
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	//instantiate player
	player = new Player();

	//if a key goes down - put it into the array
	document.body.addEventListener("keydown", function(e){
		//put this keycode in the array
		keys[e.keyCode] = true;
	});


	document.body.addEventListener("keyup", function(e){
		keys[e.keyCode] = false;

		//if the spacebar is pressed create a new projectile
		if (e.keyCode === 32){
			projectiles.push(new Projectile(player.angle));
		}
	});

	//updates and draws all attributes on the screen
	Render();
}

//creates player
class Player {

	constructor() {
		/**
			Parameters:
			N/A

			Returns:
			N/A

			Description
			initialises all required attributes for player
		**/
		//where the player appears on the screen
		this.x = canvasWidth / 2;
		this.y = canvasHeight /2;

		//Controlling and moving the player
		this.moveForward = false;
		this.speed = 0.09;
		this.velocityX = 0;
		this.velocityY = 0;
		this.rotateSpeed = 0.001;


		//size of player
		this.radius = 30;

		//position of radius
		this.angle = 0;
		
		//colour of player
		this.fillStyle = "#FFA500";

		//where the projectile is fired
		this.projectilePointX = canvasWidth / 2 + 30;
		this.projectilePointY = canvasHeight / 2;

	}

	//rotating the ship
	Rotate(direction){
		this.angle += this.rotateSpeed * direction;
	}

	Update(){
		/**
			Parameters:
			N/A

			Returns:
			N/A

			Description 
			- Updates the x and y values of player
			- keeps the player within the boundaries / player does not get lost outside boundaries
			- slows down the player when keys are released
		**/
		//convert angle into radians
		let radians = this.angle / Math.PI * 180;

		//cacluate the changing values of x and y when moving forward
		if (this.moveForward){
			this.velocityX += Math.cos(radians) * this.speed;
			this.velocityY += Math.sin(radians) * this.speed;
		}

		//moving the player to the opposite side of the canvas if it
		//goes out of the boundaries of the screen
		if (this.x < this.radius){ //left side
			this.x = canvas.width;
		}

		if (this.x > canvas.width){ //right side
			this.x = this.radius;
		}

		if (this.y < this.radius){ //top
			this.y = canvas.height;
		}

		if (this.y > canvas.height){ //bottom
			this.y = this.radius;
		}

		//slowing down the player when key isnt being pressed
		this.velocityX *= 0.99;
		this.velocityY *=0.99;

		//change value of x and y whilst accounting for air friction
		this.x -= this.velocityX;
		this.y -= this.velocityY;
	}


	createPlayer() {
		/**
			Parameters:
			N/A

			Returns:
			N/A

			Description
			Draws the player on the screen
		**/
		 
		//draw a triangle for player and fill with specified colour
		c.beginPath();

		//create triangle
		let vertAngle = ((Math.PI * 2) / 3);
		let radians = this.angle / Math.PI * 180;
		this.projectilePointX = this.x - this.radius * Math.cos(radians);
		this.projectilePointY = this.y - this.radius * Math.sin(radians);
		for (let i = 0; i < 3; i++){
			c.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians),
			this.y - this.radius * Math.sin(vertAngle * i + radians));
		}
		c.closePath();
		
		//fill triangle with orange colour
		c.fillStyle = "#FFA500";
		c.fill();
	}	
	
}

//creates projectile	
class Projectile {

	constructor(angle) {
		/**
			Parameters:
			angle - the angle of the player when the projectile is created

			Returns:
			N/A

			Description:
			initialises all the attriutes of the projectile
		**/
		//where the projectile is fired
		this.x = player.projectilePointX;
		this.y = player.projectilePointY;
		
		//angle at which it is fired
		this.angle = angle;
		
		//shape of projectile
		this.height = 4;
		this.width = 4;
		
		//controls movement of projectile
		this.speed = 5;
		this.velocityX = 0;
		this.velocityY = 0;
	}


	Update() {
	/**
		Parameters:
		N/A

		Returns:
		N/A

		Description 
		Updates the angle of which the projectile is fired
	**/	
		//convert angle into radians
		var radians = this.angle / Math.PI * 180;
		//calculate the x and y
		this.x -= Math.cos(radians) * this.speed;
		this.y -= Math.sin(radians) * this.speed;
	}

	createProjectile() {
		/**
			Parameters:
			N/A

			Returns:
			N/A

			Description
			draws the projectile on the screen
		**/
		c.fillStyle = "white";
		c.fillRect(this.x, this.y, this.width, this.height);
	}
		
}


function getDistance(x1, y1, x2, y2) {
/**
	Parameters:
	x1 - one x value (the player or projectile x value)
	y1 - one y value (the player or projectile y value)
	x2 - second x value (the player or projectile x value)
	y2 - one y value (the player or projectile y value)

	Returns 
	the distance between the two objects.

	Description 
	Use the pythagorean theorem to calculate the distance between two points

**/
	let xDistance = x2-x1;
	let yDistance = y2-y1;

	//put the x and y into theorem
	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}


function Render(){
/**
	Parameters:
	N/A

	Returns
	N/A

	Description 
	 - Controls the movements of player using the arrow keys
	 - Creates and updates player and projectiles as they move on the screen
	 - Handles collision detection
**/
	//moving the player using the arrow keys
	player.moveForward = (keys[38]);
	//left arrow
	if (keys[37]){
		player.Rotate(-1);
	}
	//right arrow
	if (keys[39]){
		player.Rotate(1);
	}

	//collision detection
	for (let i = 0; i < projectiles.length; i++){
		if (getDistance(player.x, player.y, projectiles[i].x, projectiles[i].y) < (25)){
			//sends user back to the start page
			window.location.href = 'StartPage.html';
		}
	}

	//updates the player as it moves around the screen
	c.clearRect(0,0, canvasWidth, canvasHeight);
	player.Update();
	player.createPlayer();

	//updates the projectiles as they are fired
	if (projectiles.length !== 0){
		for (let i = 0; i < projectiles.length; i++){
			projectiles[i].Update();
			projectiles[i].createProjectile();
		}
	}

	//this makes all movement on the screen smooth and seamless
	requestAnimationFrame(Render);

}



