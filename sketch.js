var num,numtext

function setup() {
  createCanvas(400, 400);
  num = Math.round(random(1,6))
}

function draw() {
  background(220);
  switch(num ) {
    case 1:numtext = "one";
          break;
    case 2:numtext = "two";
          break;
    case 3:numtext = "three";
          break;
    case 4:numtext = "four";
          break;
    case 5:numtext = "five";
          break; 
    case 6:numtext = "six";
          break;
    default:numtext = "default"
          break;
  }
  text("NumText"+num,200,200)
}