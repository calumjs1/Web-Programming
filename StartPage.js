 

var pics = [ 

    "Web Programming/images/orange.jpg", 
    
    "Web Programming/images/pink.jpg", 
    
    "Web Programming/images/blue.jpg" 
    
    ] 
    
     
    
    var btn = document.querySelector(#btn2); 
    
    var image = document.querySelector("img"); 
    
    var counter = 1; 
    
     
    
    btn.addEventListener("click", function(){ 
    
    if (counter === 2){ 
    
    counter = 0; 
    
    } 
    
    image.src = pics[counter] 
    
    counter = counter +1; 
    
    }); 