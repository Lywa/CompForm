// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

// Dot Challenge Starting Point

var umbrellas=[];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  background(20,20,20,100);

  for (let i=0; i<80; i++) {
    umbrellas.push(new Jitter());
  }
}


function draw() {
  
  //rect(20,20,20,20);

  noStroke();
  ellipseMode(CENTER);

  let x = random(70,width-70);
  let y = random(70,height-70);
 
  var noiseFrequency = .02;

  for (var i=0; i<umbrellas.length; i++) {
   
    umbrellas[i].move();
    umbrellas[i].display();
  }

  // for (var i = 0; i < 80; i++) {
  //     // these points are not scattered in the same way
  //     // how can you make the arrangement match the challenge?
  //     var x = random(70,width-70);
  //     var y = random(70,height-70);

  //     // the diameter shouldn't always be 10, it needs to vary
  //     var diameter = random(1,19);

  //     // the colors also need to change
  //     // what colorMode would be easiest to work with?
  //     fill(random(255),80,180);

  //     ellipse(x, y, diameter, diameter);
  // }


  //noLoop();


}

function Umbrella(x,y){

 
    fill(random(255),80,180);
    ellipse(x, y, diameter, diameter);



};

// Jitter class ( from p5 reference)
function Jitter() {
  this.x = random(70,width-70);
  this.y  = random(70,height-70);
  this.diameter = random(1, 19);
  this.speed = 4;
  
  

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(random(200,255),80,100);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

 