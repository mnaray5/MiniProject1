function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  h = 250*(Math.sqrt(3)/2);
  function draw() {
    background(255,255,255);





  //Q1
  fill("#D07DFE");
  noStroke();
  rect(0,0,windowWidth/10,windowHeight/2);

  fill("#B36BDC");
  noStroke();
  rect(windowWidth/10,0,windowWidth/10,windowHeight/2);

  fill("#A162C5");
  noStroke();
  rect(2*windowWidth/10,0,windowWidth/10,windowHeight/2);

  fill("#9158B1");
  noStroke();
  rect(3*windowWidth/10,0,windowWidth/10,windowHeight/2);

  fill("#83509F");
  noStroke();
  rect(4*windowWidth/10,0,windowWidth/10,windowHeight/2);

//Q2

  fill("#9AF079");
  noStroke();
  rect(windowWidth/2,0,windowWidth/2,windowHeight/10);

  fill("#8EDC71");
  noStroke();
  rect(windowWidth/2,windowHeight/10,windowWidth/2,windowHeight/10);

  fill("#80C467");
  noStroke();
  rect(windowWidth/2,2*windowHeight/10,windowWidth/2,windowHeight/10);

  fill("#73AF5D");
  noStroke();
  rect(windowWidth/2,3*windowHeight/10,windowWidth/2,windowHeight/10);
  
  fill("#679A54");
  noStroke();
  rect(windowWidth/2,4*windowHeight/10,windowWidth/2,windowHeight/10);

//Q3

  fill("#7FF5F1");
  noStroke();
  rect(windowWidth/2,windowHeight/2,windowWidth/10,windowHeight/2);

  fill("#77E4E0");
  noStroke();
  rect(windowWidth/10 + windowWidth/2,windowHeight/2,windowWidth/10,windowHeight/2);

  fill("#6CCCC8");
  noStroke();
  rect(2*windowWidth/10 + windowWidth/2,windowHeight/2,windowWidth/10,windowHeight/2);   

  fill("#60B4B0");
  noStroke();
  rect(3*windowWidth/10 + windowWidth/2,windowHeight/2,windowWidth/10,windowHeight/2);

  fill("#559D99");
  noStroke();
  rect(4*windowWidth/10 + windowWidth/2,windowHeight/2,windowWidth/10,windowHeight/2);

//Q4
  fill("#F88DD5");
  noStroke();
  rect(0,windowHeight/2,windowWidth/2,windowHeight/10);

  fill("#DC7DBD");
  noStroke();
  rect(0,windowHeight/2+windowHeight/10,windowWidth/2,windowHeight/10);

  fill("#C16DA5");
  noStroke();
  rect(0,windowHeight/2+2*windowHeight/10,windowWidth/2,windowHeight/10);

  fill("#AA6192");
  noStroke();
  rect(0,windowHeight/2+3*windowHeight/10,windowWidth/2,windowHeight/10);
  
  fill("#9C5D87");
  noStroke();
  rect(0,windowHeight/2+4*windowHeight/10,windowWidth/2,windowHeight/10);   


    noFill();
    stroke(0,0,0);
    strokeWeight(10);
    rect(0, 0, windowWidth, windowHeight)
    line(windowWidth/2, 0 , windowWidth/2, windowHeight);
    line(0, windowHeight/2 , windowWidth, windowHeight/2);
  }