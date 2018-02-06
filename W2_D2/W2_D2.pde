// declare an array for the shapes

//int[] shape= {0,1,2,3};

String[] shapes = { "circle", "triangle", "square", "blank" };

int x=0;
int y=0;


void setup(){

 size(600,600);
 background(255);
 noStroke();
int shapeNumber = int(random(4));

String printShape = shapes[shapeNumber];


for(int i=0; i<width; i+=random(40,100)){
    
    for(int j=0; j<height; j+=random(40,100)){
        
        x=i;
        y=j;
        float r= random(50,255);
        float g= random(50,255);
        float b= random(50,255);
        //float a= random(0,255);
        fill(r,g,b);
        
         drawShape();
      
    }     

  }

}

void draw(){

  fill(255,255,255,200);
  rect(0,0,width,height);

  
  for(int i=0; i<width; i+=random(40,100)){
    
    for(int j=0; j<height; j+=random(40,100)){
        
        x=i;
        y=j;
        float r= random(50,255);
        float g= random(50,255);
        float b= random(50,255);
        float a= random(0,255);
        fill(r,g,b,a);
        
         drawShape();
      
    }     

  }

}

void drawShape(){
        float radius= random(10,100);
        int shapeNumber = int(random(4));

        String printShape = shapes[shapeNumber];

        println(shapeNumber);
        println(printShape);

       if(printShape == "circle"){
          
          
          ellipse(10+x,10+y,radius,radius);
    
        }else if(printShape == "square"){        
  
          rect(10+x,10+y,radius,radius);
        }else if(printShape == "triangle"){
        
        triangle(15+x,y+5,15+radius+x,y+5+radius,15+x+radius,5+y);
        
        }else{
       
        
        }
        
        /*switch(printShape){
        
           case "circle": 
           ellipse(x,y,10,10);
           
           case "square":
           rect(x,y,10,10);
           
           case "triangle":
           triangle(15+x,y+5,20+x,y+15,25+x,5+y);
           
           case "blank":
           fill(255);
           
       
        }*/
        
   

}