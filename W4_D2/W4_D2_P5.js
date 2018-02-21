
let xoff = 0.0;
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  //background(255);
  
  noFill();
  // line(0,height/5,width,height/5);
  // line(0,height/5*2,width,height/5*2);
  // line(0,height/5*3,width,height/5*3);
  // line(0,height/5*4,width,height/5*4);

  xoff = xoff + 0.01;

  //noise reference p5.
  let n = noise(xoff) * width;
 

  for(let i=0;i<width;i+=50){
    stroke(random(255),random(255),random(255));
    beginShape();
    vertex(i,0);
    vertex(i+1000*noise(n),height/5);
    vertex(i-1000*noise(n),height/5*2);
    vertex(i+1000*noise(n),height/5*3); 
    vertex(i-1000*noise(n),height/5*4);
    vertex(i+1000*noise(n),height/5*5);
    endShape();

  }

  
}

