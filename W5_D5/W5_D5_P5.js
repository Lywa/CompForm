var balls=[];

var color;
var touch= false;
var counter =0;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    background(20,20,20,100);
    color = color(random(0,255),random(0,255),random(0,255),random(0,255));
    var numBalls=1;
    for (let i=0; i<numBalls; i++) {
      balls.push(new Ball());

    }
  }
  
  
  function draw() {
    
   // background(20,20,20,5);
  
    noStroke();
    ellipseMode(CENTER);
  
    
  
    for (var i=0; i<balls.length; i++) {
     
        balls[i].move();
        balls[i].display();
    }
  
    // keyReleased();
    
      

  }
  
  
  
  // Ball class
  function Ball() {
    this.x = random(0,width/2);
    this.y  = random(0,height/2);
    this.w = random(0,width/2);
    this.z  = random(0,height/2);
    this.color;

    this.dirX = random(-5, 5);
    this.dirY = random(-5, 5);
    this.radius= random(2,10);
    
    
  
    this.move = function() {
      this.x += this.dirX;
      this.y += this.dirY;

          if (this.x<=0 || this.x>= width-this.w){
            this.dirX=-1*this.dirX;
           
            touch = true;
            newBall();
            counter++;
           
            
        }
    
    
        if (this.y<=0 || this.y>= height-this.z){
        this.dirY=-1*this.dirY;
        
        touch= true;
        newBall();
        counter++;
        }
    }
  
    this.display = function() {
      stroke(color);
      noFill();
      rect(this.x,this.y,this.w,this.z,this.radius);
    };
  }
  
  function newBall(){
    

       if (touch== true){
        touch=false;
        balls.push(new Ball());
        this.color= (random(0,255),random(0,255),random(0,255),random(0,255));
        }else{

        }
      }
  

  // function keyReleased(){

  //   if (keyCode === 43 ){
  //     balls.push(new Ball());

  //   } if (keyCode === 43 ){
  //     balls.splice(1);

  //   } 

  // }
   