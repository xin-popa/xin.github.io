var img = [];
var song = [];
var imageText = ['Calpico','Coke','Matcha','Tea','Milk'];
var index = 0;
var button1,button2,clickable,h2,popbox,volslider;


function preload() {
  for (var i=0; i<5; i++){
    img [i]= loadImage("assets2/img/"+i+".jpg");
  }
  for (var i=0; i<3; i++){
  song [i]= loadSound("assets2/sound/"+i+".mp3");
  }
}


function setup() {


  createCanvas(600, 500);


  createCnvElements();


  musicPlay();
  musicControl();


  buttonBehavior();
}


function draw(){
  background(111, 166, 159);


  display();


  musicVolSet();

}


function buttonBehavior(){
  buttonNext.mousePressed(changeSlideBw);
  buttonNext.mousePressed(playSongBw);
  buttonPrev.mousePressed(changeSlideFw);
  buttonPrev.mousePressed(playSongFw);
}


function musicPlay(){
  song[2].loop();
}


function musicVolSet(){
  song[2].setVolume(volslider.value());
}


function musicControl(){
  song[2].setVolume(0.3);
  playButton = createButton('Pause');
  playButton.addClass('songcontrolbuttons');
  stopButton = createButton('Stop');
  stopButton.addClass('songcontrolbuttons');
  playButton.mousePressed(togglePlaySong);
  stopButton.mousePressed(stopSong);
  volslider = createSlider(0,1,0.5,0.01);
}

function createCnvElements(){



  buttonNext = createButton('< Previous');
  buttonNext.addClass('buttons');
  buttonPrev = createButton('Next >');
  buttonPrev.addClass('buttons');
  buttonNext.position(width-500, height-70);
  buttonPrev.position(width-175, height-70);
}

function display(){
  displayImages();
  displayText();
  displayClickable();
  displayPopup();
}

function displayClickable(){

  clickable = select('#clickable');
  clickable.position(width/5,height/2);


  var Highlight = changeStyle('37FF00','B85DAC','0.8');
  var Unhighlight = changeStyle('00AAFF','DF7B77','0.2');
  clickable.mouseOver(Highlight);
  clickable.mouseOut( Unhighlight);
}


function changeStyle(borderColor, backgroundColor, opacity) {
  return function() {
  this.style('border', '2px solid #' + borderColor);
  this.style('background-color', '#' + backgroundColor);
  this.style('opacity', opacity);
  };
}

function displayPopup(){
  clickable.mousePressed(popup);
}

function displayImages(){
  imageMode(CENTER);
  image(img[index], width/2,height/2,width*0.8,height*0.6);
}

function displayText(){
  textSize(25);
  textAlign(CENTER);
  fill(12,100,230);
  noStroke();
  text(imageText[index], width/2 , height*0.85);
}


function popup(){
  popbox = select('#popup');
  popbox.position(width/5+90,height/2.5);
  popbox.mousePressed(popupHide);
  buttonNext.mousePressed(popupHide);
  buttonPrev.mousePressed(popupHide);
  popbox.style('display:inline');
}


function popupHide(){
  popbox.style('display:none');
}




function changeSlideBw() {
  if (index == 0){
    index =  img.length-1;
  } else{
    index = index - 1;
  }
}


function changeSlideFw(){
  if (index == img.length-1){
    index =  0;
  } else{
    index = index + 1;
  }
}


function playSongBw(){
  song[1].play();
}

function playSongFw(){
  song[0].play();
}


function togglePlaySong(){
  if (!song[2].isPlaying()){
    song[2].play();
    playButton.html('Pause');
  } else{
    song[2].pause();
    playButton.html('Play');
  }
}


function stopSong(){
  song[2].stop();
  playButton.html('Play');
}
