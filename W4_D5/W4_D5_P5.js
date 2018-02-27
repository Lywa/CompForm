// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/IKB1hWWedMk

// Edited by SacrificeProductions

var cols, rows;
var scl = 10;
var w = 1400;
var h = 1000;
var colorsLand=[];
var colorsGreen=[];
var value;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  noLoop();
  
  colorsLand=[(179, 89, 0),(204, 102, 0),(230, 115, 0)];
  colorsGreen=[(0, 153, 0),(0, 153, 51),(51, 102, 0)];

  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

 

  //flying += 0.04;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -200, 300);
      value=map(noise(xoff, yoff), 0, 1, -200, 300);
      console.log(value);
      xoff += 0.1;
    }
    yoff += 0.1;
    
  }

 
  background(0);
  translate(0, 50);
  rotateZ(-PI);
  stroke(128, 64, 0);
  //fill(204, 102, 0);
  
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    strokeWeight(2);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      drawLand();
    }
    endShape();

    beginShape(LINES);
    strokeWeight(2);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      drawLand();
      
    }
    endShape();


  }


}

function drawLand(){

  if (value>=200){

    fill(179, 89, 0);
  }

  else if (value>=100&&value<200){

    fill(204, 102, 0);

  }else if(value<=100){

    fill(0, 153, 0);
  }
  
    
  
}
colorsLand=[(179, 89, 0),(204, 102, 0),(230, 115, 0)];
  colorsGreen=[(0, 153, 0),(0, 153, 51),(51, 102, 0)];