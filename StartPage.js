  
var pics = [
	"Web Programming/images/orange.jpg",
	"Web Programming/images/pink.jpg",
	"Web Programming/images/blue.jpg"
]

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