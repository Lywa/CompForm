
// declare an array for the shapes

//int[] shape= {0,1,2,3};

var shapes = ['circle', 'circle_border', 'trapezium', 'square', 'blank'];

var x=0;
var y=0;

function setup() {

createCanvas(900,600);

background(229,221,199);

var shapeNumber = int(random(5));

var printShape = shapes[shapeNumber];

console.log(shapeNumber);
console.log(printShape);

for(var i=100; i<900-100; i+=random(40,150)){
  
    for(var j=100; j<600-100; j+=random(40,150)){
        
        x=i;
        y=j;
        var r= random(50,255);
        var g= random(50,255);
        var b= random(50,255);
        //float a= random(0,255);
        console.log(r);
     
        drawShape();
       
    }     

  } 


}



function draw() {
  

  
}

function drawShape(){


        var radius= random(5,60);
        var b = random(2,20);
        var h = random(2,20);
        var w= random(1,60);
        var z= random(1,60);
  
        var shapeNumber = int(random(4));
        
        var printShape = shapes[shapeNumber];

        //fill(255);

        selectColor();
        //println(shapeNumber);
        //println(printShape);
      
       
       if(printShape == "circle"){
         
          ellipse(10+x,10+y,radius,radius);
         
         }else if( printShape == "circle_border"){
         
         noFill();
         strokeWeight(4);
       
         ellipse(10+x,10+y,radius,radius);
         
        }else if(printShape == "square"){        
         
          push();
          translate(10+x,10+y);
        
          rotate(radians(random(0,360)));
          rect(0,0,b,b);
          //rect(10+x,10+y,b,b);
          pop();
  
        }else if(printShape == "trapezium"){


        push();
        translate(10+x,10+y);
        rotate(radians(random(0,360)));
        rect(0,0,w,z);
        pop();
        
        //rect(10+x,10+y,w,z);
    
        }else{
       
        
        }
        
       
        
     
}

function selectColor(){

      
  var colorarray = [ color(52,72,92), color(209,161,67),
  color(150,61,52), color(130,83,52), color(43,42,45) ];

  var colorShape= int(random(5));

  var printColor = colorarray[colorShape];
           

  fill (printColor);
  stroke(printColor);




}


