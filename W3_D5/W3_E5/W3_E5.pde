import controlP5.*;


PImage bg;
PImage mouth;
PImage face;
PImage eyes;
float i;
ControlP5 cp5;
PFont text;

void setup(){
  size(272,350);
  background(255);
  
  text= createFont("RobotoCondensed-Regular.ttf",20);
  
  cp5 = new ControlP5(this);
  
  // add a horizontal sliders, the value of this slider will be linked
  // to variable 'sliderValue' 
  cp5.addSlider("sliderbg")
     .setPosition(10,300)
     .setRange(1,8)
     .setSize(50,9)
     ;
 
   cp5.addSlider("slidermouth")
     .setPosition(10,330)
     .setRange(1,8)
     .setSize(50,9)
     ;
   
    cp5.addSlider("slidereyes")
     .setPosition(10,320)
     .setRange(1,8)
     .setSize(50,9)
     ;
 
    cp5.addSlider("sliderface")
     .setPosition(10,310)
     .setRange(1,8)
     .setSize(50,9)
     ;
  
 textSize(30);
  textFont(text);
  fill(255);
  text("Background",150, 300);
}

void draw(){
  
  float sliderbg= cp5.getController("sliderbg").getValue();
  float sliderface= cp5.getController("sliderface").getValue();
  float slidereyes= cp5.getController("slidereyes").getValue();
  float slidermouth= cp5.getController("slidermouth").getValue();
  int number1= floor(sliderbg);
  int number2= floor(sliderface);
  //int number2= floor(random(1,12));
  int number3= floor(slidereyes);
  int number4= floor(slidermouth);
  println(number1);
  bg= loadImage("bg"+number1+".png");
  face= loadImage("face"+number2+".png");
  eyes= loadImage("eyes"+number3+".png");
  mouth= loadImage("mouth"+number4+".png");
  
  
  
  image(bg,0,0);
  image(face,0,0);
  image(eyes,0,0);
  image(mouth,0,0);

  

}