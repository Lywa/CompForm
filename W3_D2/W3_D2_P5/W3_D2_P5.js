
var numberLines=20;

var x=0;
var y=0;
var w=0;
var z=0;
var k=0;
var centerX;
var centerY;

function setup(){

createCanvas(window.innerWidth, window.innerHeight*0.8);

 var tag= createP('Number of lines');
  number_slider = createSlider(10, 100, 20);

  tag.style('font-size','18px');
  tag.style('color','#ff0000');
  tag.style('fontFamily','sans-serif');
  tag.style('margin-left','1em');
  number_slider.style('margin-left','2em');

 // var tag2 = createP('Move x');
 // xAxis = createSlider(0,width,width/2);

 //  var tag3 = createP('Move y');
 // yAxis = createSlider(0,height,height/2);


}





function draw(){

  fill(255);
  rect(0,0,width,height);
  noFill();

 

  numberLines= number_slider.value();
  // centerX=xAxis.value();
  // centerY=yAxis.value();


  stroke(0);
  strokeWeight(0.5);
  drawLines();




}

function drawLines(){


  for(var i=0; i<=numberLines; i++){

    x=width/numberLines*i
    y= 0;
    w=height/numberLines*i
    y= height;
    k= width;


    stroke(0);
    line(x,y,mouseX,mouseY);
    stroke(255,0,0);
    line(x,z,mouseX,mouseY);
    stroke(0,255,0);
    line(0,w,mouseX,mouseY);
    stroke(0,0,255);
    line(k,w,mouseX,mouseY);
    ellipse(mouseX,mouseY,i*50,i*50);


  }




}