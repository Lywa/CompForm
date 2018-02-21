var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(255);
  rect(0,0,width,height);
  
  DrawShape(0,0,(255,255,255),millis()*0.01);
  blendMode(MULTIPLY);
  
  DrawShape(10,20,(255,255,255),millis()*0.002);
  blendMode(MULTIPLY);
  rect(0,0,width,height);
  DrawShape(10,20,(255,255,255),millis()*0.001);
 
 
}

function DrawShape(xoff,yoff,color,time){

  fill(color);

  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff,time), 0, 1, 200,300);

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 1;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

}