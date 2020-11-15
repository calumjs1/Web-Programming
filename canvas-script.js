
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
const x = canvas.width / 2
const y = canvas.height / 2

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

	})
}



