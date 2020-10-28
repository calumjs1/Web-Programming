  
var pics = [
	"images/orange.jpg",
	"images/pink.jpg",
	"images/blue.jpg"
]

var button1 = <button onclick="document.location='canvas.html'">Game Screen</button>

var button2 = document.querySelector("#button2");
var image = document.querySelector("img");
var counter = 1;

button2.addEventListener("click", function(){
	if (counter === 3){
		counter = 0;
	}
	image.src = pics[counter]
	counter = counter +1;
});
