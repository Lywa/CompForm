int diam=10;
int number= 10;

void setup(){

noLoop();


size(600,600);
background(255);

noFill();
stroke(0);

// Karen Lang 
/*while (diam<width) {
  ellipse(width/2, height/2, diam, diam);
  diam+=5;
}*/



}


void draw(){

   for(int i=0; i<number; i++){
      
     for(int j=0; j<number ; j++){
     
         squareIt();
         
     }
   
   }
  



}

void squareIt(){

  
  while (diam<width) {
  rect(width/2-diam/2, height/2-diam/2, diam, diam);
  diam+=15;
  
}

}