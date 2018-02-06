
// declare an array for the shapes

//int[] shape= {0,1,2,3};

var shapes = ['triangle1', 'triangle2'];

var x=0;
var y=0;
var z=0;

function setup() {

createCanvas(600,900);

background(222,207,174);

var shapeNumber = int(random(2));

var printShape = shapes[shapeNumber];

console.log(shapeNumber);
console.log(printShape);

for(var i=75; i<width-75; i+=30){
  
    for(var j=75; j<height-75; j+=15){
        
        x=i;
        y=j;
      
        drawShape();
    }     

  } 


}




function draw() {
  

  
}

function drawShape(){


       
        var shapeNumber = int(random(2));
        
        var printShape = shapes[shapeNumber];

        //fill(255);

        selectColor();
        //println(shapeNumber);
        //println(printShape);
      
       
       if(printShape == "triangle1"){
         
         triangle(x,y,30+x,y,15+x,15+y);
         
         }else if( printShape == "triangle2"){
         
          triangle(x,y+15,15+x,y,30+x,15+y);
         
        }
  }  

  

function selectColor(){

      
  var colorarray = [ color(27,21,21),color(222,207,174),color(206,188,166)];

  var colorShape= int(random(3));

  var printColor = colorarray[colorShape];
           

  fill (printColor);
  stroke(printColor);




}


