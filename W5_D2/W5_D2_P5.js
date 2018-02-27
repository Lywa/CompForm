// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/addons/p5.dom.js

// draws a rectangle, where you tell it to!


var amplitude_slider;
var frequency_slider;
var timespeed_slider;

var startX = 50;
var startY = 250;
var endX = 450;
var endY = 50;
var frameCount;

function setup() {
    createCanvas(500, 300);


    createP('Amplitude');
    amplitude_slider = createSlider(0, 300, 150);
    createP('Frequency');
    frequency_slider = createSlider(0, 100, 50);
    createP('Timespeed');
    timespeed_slider = createSlider(0, 100, 50);

}


function draw() {
    background(50);
    ellipseMode(CENTER);

    var amplitude = amplitude_slider.value() / 100;
    var frequency = frequency_slider.value();
    var timespeed = timespeed_slider.value()/100;
   

    noiseDetail(1, .5);

   var n= 

    fill(255);
    noStroke();

    // study this loop. do you understand how the line of ellipses is created?
    for (i = 0; i < 1; i += .02) {
        var x = lerp(startX, endX, i);
        var y = lerp(startY, endY, i);

        // hint: drive offsetX and offsetY with noise() instead of random()
        //var offsetX = (random() - .5) * amplitude * 10;
        //var offsetY = (random() - .5) * amplitude * 10;

        var offsetX = noise(i*frequency,frameCount*timespeed) * amplitude * 50;
        var offsetY = noise(i*frequency,frameCount*timespeed) * amplitude * 50;

        ellipse(x + offsetX, y + offsetY, 10, 10);
    }



}