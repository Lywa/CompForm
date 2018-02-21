import controlP5.*;


PImage head;
PImage body;
PImage feet;
float i;
ControlP5 cp5;
PFont text;

void setup(){
  size(200,200);
  background(255);
  
  text= createFont("RobotoCondensed-Regular.ttf",20);
  
  cp5 = new ControlP5(this);
  
  // add a horizontal sliders, the value of this slider will be linked
  // to variable 'sliderValue' 
  cp5.addSlider("sliderHead")
     .setPosition(10,10)
     .setRange(1,12)
     .setSize(50,9)
     ;
 
   cp5.addSlider("sliderBody")
     .setPosition(10,20)
     .setRange(1,12)
     .setSize(50,9)
     ;
   
    cp5.addSlider("sliderFeet")
     .setPosition(10,30)
     .setRange(1,12)
     .setSize(50,9)
     ;
 
  
  

}

void draw(){
  
  float sliderValue= cp5.getController("sliderHead").getValue();
  float sliderValue2= cp5.getController("sliderBody").getValue();
  float sliderValue3= cp5.getController("sliderFeet").getValue();
  int number1= floor(sliderValue);
  int number2= floor(sliderValue2);
  //int number2= floor(random(1,12));
  int number3= floor(sliderValue3);
  println(number1);
  head= loadImage("head_"+number1+".jpg");
  body= loadImage("body_"+number2+".jpg");
  feet= loadImage("feet_"+number3+".jpg");
  
  
  
  image(head,0,0);
  image(body,0,80);
  image(feet,0,115);
  textSize(100);
  textFont(text);
  fill(255);
  text("Head",100,20);
  

}