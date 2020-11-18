
//canvas
const canvas = document.querySelector('canvas');

//make canvas fit window
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// context
var c = canvas.getContext('2d');

c.beginPath();

c.fillRect(20, 40, 250, 1)
c.fillRect(30, 100, 100, 10)
c.fillRect(50, 80, 50, 2)
c.stroke();

//creates player
class Player {
	constructor(x, y, radius, color) {
		//where it appears on the screen
		this.x = x
		this.y = y

		//size of player
		this.radius = radius

		//colour of player
		this.color = color
	}



	createPlayer() {
		 
		//draw full circle for player and fill with specified colour
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)	
		c.fillStyle = this.color
		c.fill()
	}

	//this updates the x and y coordinates of the player to allow it to move
	//across the screen
	update() {
		this.createPlayer();
		this.x = x
		this.y = y
	}	
	
}

//creates projectile	
class Projectile {

	constructor(x , y, radius, color, velocity) {
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity = velocity
	}

	createProjectile() {
		
		//draw full circle for projectile and fill with specified colour
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)	
		c.fillStyle = this.color
		c.fill()
	}

	//update the properties of projectile
	update() {
		this.createProjectile()
		this.x = this.x +this.velocity.x
		this.y = this.y +this.velocity.y
	}

		
}

//coordinates that point to the centre of the window
let x = canvas.width / 2
let y = canvas.height / 2

//instance of Player
const player = new Player(x, y, 30, '#FFA500')
	

//instace of projectile
//(x coord, y coord, size, colour, velocity)
const projectile = new Projectile(
	x, 	
	y, 
	5, 
	'black',
	{
	 	x: 1,
		y: 1

	}
)

//management for multiple instances of projectile
const projectileArray = []

//creates smooth movement over the canvas from projectiles
function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, canvas.width, canvas.height)

	//creates player
	player.createPlayer()

	//creates projectiles
	projectileArray.forEach(projectile =>{
		projectile.update()



	//collision detection - if projectile touches player
	if (getDistance(player.x, player.y, projectile.x, projectile.y) < player.radius + projectile.radius) {
		//take user back to start page
		window.location.href='StartPage.html'
	}

	})

	})

	//collision detection - if projectile touches player
	  if (getDistance(player.x, player.y, projectile.x, projectile.y) < player.radius + projectile.radius) {
	 	window.location.href='StartPage.html'
		}	

//adds event of mouse click - shoots projectile in direction of mouse
window.addEventListener('click', (event) => 
{
	//calculates the angle at which the projectile moves from the centre
	//the line from the centre to the mouse click creates hypotenuse
	//angle is calulated based on the formation of a right angled triangle
	const angle = Math.atan2(
		event.clientY - y, 
		event.clientX - x
	)

	//calculates the velocity, this creates a ratio that pushes the projectile 
	//in the correct direction
	const velocity = {
		x: Math.cos(angle),
		y: Math.sin(angle)
	}


	//create new projectile and push to the projectileArray
	projectileArray.push(new Projectile(x, y, 5, 'black', velocity))
})


	//create new projectile and push to the projectileArray
	projectileArray.push(new Projectile(x, y, 5, 'black', velocity))

	activate()
})


//call the animate function
animate()




//how many px the x/y coordinate is moved by
let move = 20;

window.addEventListener('keyup', (e) => {
	switch(e.key){

		//left arrow key
		case 'ArrowLeft':
			x = x - move;
			player.update()
			
			break;
		
		//right arrow key
		case 'ArrowRight':			
			x = x + move;
			player.update()
			break;

		//up arrow key
		case 'ArrowUp':			
			y = y - move;
			player.update()
			break;
		
		//down arrow key
		case 'ArrowDown':
			y = y + move;
			player.update()
			break;

	}
})

//collision detection 

//pythagoras theorem to calculate disatance between objects
function getDistance(x1, y1, x2, y2) {
	let xDistance = x2-x1;
	let yDistance = y2-y1;

	//put the x and y into theorem
	return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

