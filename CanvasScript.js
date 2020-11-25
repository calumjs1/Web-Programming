
//let canvas;
//let c;
//make canvas fit window
canvasWidth = window.innerWidth
canvasHeight = window.innerHeight
let player;
let keys = [];
let projectiles = [];



document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas(){
	//get a reference to the canvas
	canvas = document.querySelector('canvas');
	//get the context
    c = canvas.getContext('2d');
	//size of canvas
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	//c.fillRect(0, 0, canvas.width, canvas.height);
	
	//instantiate player
	player = new Player();

	//if a key goes down - put it into an array
	document.body.addEventListener("keydown", function(e){
		//put this keycode in the array
		keys[e.keyCode] = true;
	});

	document.body.addEventListener("keyup", function(e){
		keys[e.keyCode] = false;
		if (e.keycode === 32){
			projectiles.push(new Projectile(player.angle));
		}
	});
	//updates and draws all attributes on the screen
	Render();
}

//creates player
class Player {
	constructor() {
		this.visible = true;
		//where it appears on the screen
		this.x = canvasWidth / 2;
		this.y = canvasHeight /2;

		//Controlling the Player
		this.moveForward = false;
		this.speed = 0.09;
		this.velocityX = 0;
		this.velocityY = 0;
		this.rotateSpeed = 0.001;


		//size of player
		this.radius = 30;
		this.angle = 0;
		
		//colour of player
		this.fillStyle = "#FFA500";

		this.projectilePointX = this.canvasWidth / 2 + 30;
		this.projectilePointY = this.canvasHeight / 2;

		// this.height = 30;
		// this.width = 20;

	}

	//rotating the ship
	Rotate(direction){
		this.angle += this.rotateSpeed * direction;
	}

	Update(){

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

		//change value of x anf y whilst accounting for air friction
		this.x -= this.velocityX;
		this.y -= this.velocityY;
	}


	//draw the player on the screen
	createPlayer() {

		// c.fillStyle = this.color;
		// c.fillRect(this.x, this.y, this.width, this.height);

		//convert angles into radians 
		
		 
		//draw full circle for player and fill with specified colour
		c.beginPath();
		let vertAngle = ((Math.PI * 2) / 3);
		let radians = this.angle / Math.PI * 180;
		for (let i = 0; i < 3; i++){
			c.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians),
			this.y - this.radius * Math.sin(vertAngle * i + radians));
		}
		c.closePath();
		c.fillStyle = "#FFA500";
		c.fill();

		this.projectilePointX = this.x - this.radius * Math.cos(radians);
		this.projectilePointY = this.y - this.radius * Math.sin(radians);
	}	
	
}

//creates projectile	
class Projectile {

	constructor(angle) {
		this.visible = true;
		this.x = player.projectilePointX;
		this.y = player.projectilePointY;
		//this.radius = 5;
		this.angle = angle;
		this.height = 4;
		this.width = 4;
		this.speed = 5;
		this.velocityX = 0;
		this.velocityY = 0;
	}

	createProjectile() {
		//draw full circle for projectile and fill with specified colour
		// c.beginPath()
		// c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)	
		c.fillStyle = "white";
		c.fillRect(this.x, this.y, this.width, this.height);
	}

	//update the properties of projectile
	Update() {
		var radians = this.angle / Math.PI * 180;
		this.x -= Math.cos(radians) * this.speed;
		this.y -= Math.sin(radians) * this.speed;
	}

		
}

function Render(){
	player.moveForward = (keys[38]);
	//left arrow
	if (keys[37]){
		player.Rotate(-1);
	}
	//right arrow
	if (keys[39]){
		player.Rotate(1);
	}

	c.clearRect(0,0, canvasWidth, canvasHeight);
	player.Update();
	player.createPlayer();

	if (projectiles.length !== 0){
		for (let i = 0; i < projectiles.length; i++){
			projectiles[i].Update();
			projectiles[i].createProjectile();
		}
	}

	requestAnimationFrame(Render);

}

// //coordinates that point to the centre of the window
//  //let x = Math.random() *canvas.width + 1;
//  //let y = Math.random() *canvas.height + 1;

// 	let x = canvas.width/2
// 	let y = canvas.height/2

// //instance of Player
// const player = new Player(x, y, 30, '#FFA500')
	

// //instace of projectile
// //(x coord, y coord, size, colour, velocity)
// const projectile = new Projectile(
// 	x, 	
// 	y, 
// 	5, 
// 	'black',
// 	{
// 	 	x: 1,
// 		y: 1

// 	}
// )


	
// //management for multiple instances of projectile
// const projectileArray = []

// //creates smooth movement over the canvas from projectiles
// function animate() {

// 	requestAnimationFrame(animate)
// 	c.clearRect(0, 0, canvas.width, canvas.height)

// 	//creates player
// 	player.createPlayer()

// 	//creates projectiles
// 	projectileArray.forEach(projectile =>{
// 		projectile.update()
// 	})


	
// var timeoutID = setTimeout(collisionDetect, 2000);


// 	if (((getDistance(player.x, player.y, projectile.x, projectile.y)) < (player.radius + projectile.radius)) 
// 		collisionDetect();	
// 	}
	
// }
	
// function collisionDetect() {
// 	player.color = "blue";

	  
// 		// 
// 		// player.update();
// 	 // }
// 	// } else {
// 	// 	timeoutID.clearTimeout();
// 	// }
		
	
// }

// //adds event of mouse click - shoots projectile in direction of mouse
// window.addEventListener('click', (event) => 
// {
// 	//calculates the angle at which the projectile moves from the centre
// 	//the line from the centre to the mouse click creates hypotenuse
// 	//angle is calulated based on the formation of a right angled triangle
// 	const angle = Math.atan2(
// 		event.clientY - y, 
// 		event.clientX - x
// 	)

// 	//calculates the velocity, this creates a ratio that pushes the projectile 
// 	//in the correct direction
// 	const velocity = {
// 		x: Math.cos(angle),
// 		y: Math.sin(angle)
// 	}


// 	//create new projectile and push to the projectileArray
// 	projectileArray.push(new Projectile(x, y, 5, 'black', velocity))

// })


// //call the animate function
// animate()




// //how many px the x/y coordinate is moved by
// let move = 20;

// window.addEventListener('keyup', (e) => {

// 	switch(e.key){

// 		//left arrow key
// 		case 'ArrowLeft':
// 			x = x - move;
// 			player.update()
			
// 			break;
		
// 		//right arrow key
// 		case 'ArrowRight':			
// 			x = x + move;
// 			player.update()
// 			break;

// 		//up arrow key
// 		case 'ArrowUp':			
// 			y = y - move;
// 			player.update()
// 			break;
		
// 		//down arrow key
// 		case 'ArrowDown':
// 			y = y + move;
// 			player.update()
// 			break;
			
			
// 		//A key
// 		case 'AKey':
// 			x = x - move;
// 			player.update()
// 			break;
		
// 		//D key
// 		case 'DKey':
// 			x = x + move;
// 			player.update()
// 			break;
		

// 		//W key
// 		case 'WKey':			
// 			y = y - move;
// 			player.update()
// 			break;
		
// 		//S key
// 		case 'SKey':			
// 			y = y + move;
// 			player.update()
// 			break;
		

// 	}
// })

// //collision detection 

// //pythagoras theorem to calculate disatance between objects
// function getDistance(x1, y1, x2, y2) {
// 	let xDistance = x2-x1;
// 	let yDistance = y2-y1;

// 	//put the x and y into theorem
// 	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
// }

