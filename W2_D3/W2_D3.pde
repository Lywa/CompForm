// declare an array for the shapes

//int[] shape= {0,1,2,3};

String[] shapes = { "circle", "circle_border", "trapezium", "square", "blank" };

int x=0;
int y=0;


void setup(){

 size(900,600);
 background(229,221,199);
 noStroke();
int shapeNumber = int(random(5));

String printShape = shapes[shapeNumber];


for(int i=50; i<width-100; i+=random(40,150)){
    
    for(int j=50; j<height-200; j+=random(40,150)){
        
        x=i+50;
        y=j+50;
        float r= random(50,255);
        float g= random(50,255);
        float b= random(50,255);
        //float a= random(0,255);
        
     
        drawShape();
      
  
      
    }     

  }

}

void draw(){
  
  
  }



void drawShape(){
        float radius= random(5,60);
        float b = random(2,20);
        float h = random(2,20);
        float w= random(1,60);
        float z= random(1,60);
  
        int shapeNumber = int(random(4));
        
        String printShape = shapes[shapeNumber];
          selectColor();
        //println(shapeNumber);
        //println(printShape);
      
       
       if(printShape == "circle"){
         pushMatrix(); 
         translate(10+x,10+y);
           
         rotate(radians(random(0,360)));
          ellipse(0,0,radius,radius);
          popMatrix();
         
         }else if( printShape == "circle_border"){
         
         noFill();
         strokeWeight(4);
       
         ellipse(10+x,10+y,radius,radius);
         
        }else if(printShape == "square"){        
           pushMatrix(); 
           translate(10+x,10+y);
        
          rotate(radians(random(0,360)));
          rect(0,0,b,b);
        
          popMatrix();
        }else if(printShape == "trapezium"){
        
        pushMatrix();
        translate(10+x,10+y);
        rotate(radians(random(0,360)));
        rect(0,0,w,z);
        popMatrix();
        
        
        }else{
       
        
        }
        
        
       
        
     
}

void selectColor(){

    
color [] colorarray = { color(52,72,92), color(209,161,67),
color(150,61,52), color(130,83,52), color(43,42,45) };

int colorShape= int(random(5));

color printColor = colorarray[colorShape];
         

fill (printColor);
stroke(printColor);

println(colorShape);


}