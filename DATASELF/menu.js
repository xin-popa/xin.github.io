let img;
//let eating;
let set;
let classic;
let drink;
let report;


function preload(){
  modem = loadSound("audio/R1.mp3");
  img = loadImage("images/32.jpg");
}


function setup(){
  createCanvas(windowWidth,windowHeight);

  set = createButton("Recommended Set");
  set.addClass("set");
  set.mousePressed(linkmenu1);
  set.position(width/4.5,height/4.5);

  classic = createButton("Classic Tonkotsu Ramen");
  classic.addClass("classic");
  classic.mousePressed(linkmenu2);
  classic.position(width/1.6, height/4.5);

  drink = createButton("Choose a Drink");
  drink.addClass("drink");
  drink.mousePressed(linkmenu3);
  drink.position(width/4.3, height/1.6);

  report = createButton("Your Report");
  report.addClass("report");
  report.mousePressed(linkmenu4);
  report.position(width/1.5, height/1.6);


  music = createButton("music");
  music.addClass("music");
  music.mousePressed(playSound);
  music.position(0, 0);

  img = createImg("images/32.jpg");
  img.position(0, 0);
  img.attribute('width', windowWidth);
  img.attribute('height', windowHeight);
  img.style('position', 'absolute');
  img.style('z-index', '-1');





}


function linkmenu1(){
  location.href = "set.html";
}

function linkmenu2(){
  location.href = "classic.html";
}

function linkmenu3(){
  location.href = "drink.html";
}
function linkmenu4(){
  location.href = "report.html";
}

function playSound(){
//  button1.hide();
  if(modem.isPlaying()){
    modem.stop();
  }else{
    modem.rate(.90);
  modem.loop();
  }
}

function draw(){

}
