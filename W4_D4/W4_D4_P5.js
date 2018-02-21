
var green, alpha, red, lerp;

function setup(){

createCanvas(640,480);
pixelDensity(1);

createP('Red Channel');
red = createSlider(1,256,1);

createP('Green Channel');
green = createSlider(1,256,1);


createP('Blue Channel');
blue = createSlider(1,256,1);

createP('Alpha Channel');
alpha = createSlider(1,256,255);





//createP('Mix Colors');
//lerp = createSlider(0,0.1,0);


}





function draw(){

  
background(51);

loadPixels();
  
	for(var y=0; y<height; y++){
		for (var x=0; x< width; x++){

			var index = (x+y *width)*4;

    noiseDetail();
		//r
		pixels[index] =(noise(0.5*frameCount)*10+10)%255;
		//g
		pixels[index+1] =(noise(millis())*100)%255;
		//b
		pixels[index+2] =x;
		//a
		pixels[index+3] =100;

		}
    //(noise(millis())*0.05,millis()*0.05,millis()*0.05)%255;


	}
//lerpColor(0,colorX,lerp.value()*255);

		//console.log(lerp.value());

updatePixels();

/*loadPixels();
  
	
	for (var x=0; x< width; x++){
		for(var y=0; y<height; y++){
			var index = (x+y *width)*4;

		//r
		pixels[index] =red.value();
		//g
		pixels[index+1] =green.value();
		//b
		pixels[index+2] =blue.value();
		//a
		pixels[index+3] =alpha.value();

		}


	}


updatePixels();*/

}






