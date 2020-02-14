let img1;
let img2;
let img3;
let spin;
let instant;


function preload(){

  img1 = loadImage("images/0.gif");
  img2 = loadImage("images/uu.jpg");
  img3 = loadImage("images/u2.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  image (img2, width/4,height/4);
  image (img3, width/1.7,height/4);

  spin = createButton("");
  spin.addClass("spin");
  spin.mousePressed(linkspin);
  spin.position(width/4.1,height/4.9);


  instant = createButton("");
  instant.addClass("instant");
  instant.mousePressed(linkinstant);
  instant.position(width/1.7, height/4.9);



  img1 = createImg("images/0.gif");
  img1.position(0, 0);
  img1.attribute('width', windowWidth);
  img1.attribute('height', windowHeight);
  img1.style('position', 'absolute');
  img1.style('z-index', '-1');

}


function linkspin(){
  location.href = "spin.html";
}

function linkinstant(){
  location.href = "instant.html";
}


function draw(){

}
