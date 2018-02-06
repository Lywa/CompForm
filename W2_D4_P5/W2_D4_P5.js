
// declare an array for the shapes

//int[] shape= {0,1,2,3};

var shapes = ['triangle1', 'triangle2', 'triangle3', 'triangle4'];

var x=0;
var y=0;

function setup() {

createCanvas(600,600);

background(76,193,221);

var shapeNumber = int(random(4));

var printShape = shapes[shapeNumber];

console.log(shapeNumber);
console.log(printShape);

for(var i=0; i<width; i+=15){
  
    for(var j=0; j<height; j+=15){
        
        x=i;
        y=j;
      
        drawShape();
    }     

  } 

}



function draw() {
  

  
}

function drawShape(){


       
        var shapeNumber = int(random(4));
        
        var printShape = shapes[shapeNumber];

        //fill(255);

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

function selectColor(){

      
  var colorarray = [ color(255,42,17),color(76,193,221),color(255,42,17),color(255,42,17) ];

  var colorShape= int(random(3));

  var printColor = colorarray[colorShape];
           

  fill (printColor);
  stroke(printColor);




}


