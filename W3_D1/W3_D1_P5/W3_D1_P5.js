var diam=200;
var number= 10;

var number_lines, lineWeight, color_picker;

var squared = 0;

function setup(){

//noLoop();


createCanvas(window.innerWidth, window.innerHeight * .5);
background(255);

noFill();
stroke(0);

// Karen Lang 
/*while (diam<width) {
  ellipse(width/2, height/2, diam, diam);
  diam+=5;
}*/

createP('Number of lines');
number_lines = createSlider(1,300,200);



createP('lineWeight');
lineWeight = createSlider(0.5, 10, 2);

createP('Color');
color_picker = createInput("#648EDE", "color");



}


function draw(){


    fill(255);
    rect(0,0,width,height);
    noFill();  
    strokeWeight(lineWeight.value());
    diam = number_lines.value();

    stroke(color_picker.value());

    squared = number_lines.value();


squareIt();



}


function squareIt(){

    
  
  while (diam<width-squared) {
  rect(width/2-diam/2, height/2-diam/2, diam-squared, diam-squared);
  diam+=15;
  
    }

}