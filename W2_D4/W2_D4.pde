// declare an array for the shapes

//int[] shape= {0,1,2,3};

String[] shapes = { "triangle1", "triangle2", "triangle3", "triangle4"};

int x=0;
int y=0;


void setup(){

 size(600,600);
 background(76,193,221);
 noStroke();
int shapeNumber = int(random(4));

String printShape = shapes[shapeNumber];


for(int i=0; i<width; i+=15){
    
    for(int j=0; j<height; j+=15){
        
        x=i;
        y=j;
     
        drawShape();
     
    }     
  }

}

void draw(){
  
  
  }



void drawShape(){
    
        int shapeNumber = int(random(4));
        
        String printShape = shapes[shapeNumber];
          selectColor();
        //println(shapeNumber);
        //println(printShape);
      
       
       if(printShape == "triangle1"){
         
         triangle(x,y,x,15+y,15+x,15+y);
         
         }else if( printShape == "triangle2"){
         
          triangle(x,y,15+x,y,x,15+y);
         
        }else if(printShape == "triangle3"){    
          
            triangle(x,y,15+x,y,15+x,15+y);
            
        }else if(printShape == "triangle1"){
        
         triangle(15+x,y,x,15+y,15+x,15+y);
        
        }else{
        
        triangle(15+x,y,x,15+y,15+x,15+y);
        }
        
        
       
       
}

void selectColor(){

    
color [] colorarray = { color(255,42,17),color(255,42,17),color(255,42,17)};

int colorShape= int(random(3));

color printColor = colorarray[colorShape];
         

fill (printColor);
stroke(printColor);

println(colorShape);


}