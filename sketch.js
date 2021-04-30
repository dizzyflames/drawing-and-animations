// day/night cycle with the sun/moon moving along a parabola
var a = function(p){
  p.setup = function() {
    p.createCanvas(1000, 1000);
  }

  var x = 0;
  var y = 300;
  var day = true;

  p.draw = function(){
    p.noStroke()
    if(day) {
      p.background(0, 208, 250);
    } else {
      p.background(0, 0, 139)

      // stars
      p.fill(255, 255, 255)
      p.rect(100,100, 10,10)
      p.rect(250,250, 10,10)
      p.rect(300,500, 10,10)
      p.rect(500,500, 10,10)
      p.rect(400,600, 10,10)
      p.rect(300,800, 10,10)
      p.rect(400,700, 10,10)
      p.rect(800,300, 10,10)
      p.rect(800,500, 10,10)
      p.rect(100,600, 10,10)
      p.rect(700,100, 10,10)
      p.rect(800,800, 10,10)
    }

    // speed
    x += 10
    
    // arc
    y = 0.0018*x*(x-1000) + 900
    if(x > 1000){
      x = 0
      day = !day
  
    }

    // sun/moon
    if(day){
      p.fill(255, 255, 0)
    }
    else {
      p.fill(128, 128, 128)
    }

    //ellipse(x, y, 100, 100)
    p.rect(x, y, 100, 100)

    // cloud
    p.fill(128,128,128, 127)
    p.rect(200, 200, 300, 100)
    p.rect(250, 150, 200,200)
    p.rect(600, 400, 300, 100)
    p.rect(650, 350, 200,200)

    // grass
    p.fill(0,100, 0)
    p.rect(0, 900, 1000, 100)
  }
}

var cycle = new p5(a, 'c1');

// that nostalgic dvd screensaver with the bouncing ellipse
var b = function(p){
  p.setup = function() {
    p.createCanvas(1000,500);
  }
  var x = 500;
  var y = 250;
  var xDir = true;
  var yDir = true;
  p.draw = function() {
    p.background(0,0,0);
    p.ellipse(x,y,100,50);

    // bounce at these coordinates
    if(xDir || x <= 40) {
      x += 10;
      xDir = true;
    }
    if(yDir || y <= 20) {
      y += 10;
      yDir = true;
    }
    if(!xDir || x >= 960) {
      x -= 10;
      xDir = false;
    }
    if(!yDir || y >= 480) {
      y -= 8;
      yDir = false;
    }
  }
}

var dvd = new p5(b, "c2");

var c = function(p){
  p.setup=function() {
    p.createCanvas(1000,800);
    p.frameRate(600);
    p.background(136, 182, 241);

    // taskbar
    p.fill(36, 94, 220);
    p.rect(0, 770, 1000, 30);
    p.fill(61, 151, 55);
    p.rect(0,770, 100, 200);
    p.fill(29,146,225);
    p.rect(850,770, 150,200);
    
  }

  p.draw=function() {
    // windows
    p.fill(238, 236, 221);
    p.rect(p.mouseX, p.mouseY, 200, 100);
    p.fill(4, 83, 245);
    p.rect(p.mouseX, p.mouseY, 200, 10);
    p.rect(p.mouseX + 170, p.mouseY, 10, 10);
    p.rect(p.mouseX + 180, p.mouseY, 10, 10);
    p.fill(203, 48, 30);
    p.rect(p.mouseX + 190, p.mouseY, 10, 10);
  }
}

var windowsxpLag = new p5(c, 'c3');