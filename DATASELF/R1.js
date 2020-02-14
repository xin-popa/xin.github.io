let img;
let eating;
//let companiesMenu;//drop down menu
//let companiesData;// json data
//let companies; // stores the company names
let menuLink;
//let allLogos = [];

function preload(){
  modem = loadSound("audio/R.mp3");
  img = loadImage("images/11.gif");
  //loadJSON("interfaceCompanies.json", loadImages);

}
//function loadImages(companiesData){
  //companies = companiesData.companies;
  //for(let i = 0; i < companies.length; i++){
    //allLogos[i] = loadImage("images/" + i + ".png");
  //}
  //print(allLogos.length);
//}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //canvas.style("z-index", "-1");
  //canvas.position(0,0);

  //menuLink = createSelect();
  //menuLink = createA('menuLink.html', 'menuLink');


  menuLink = createButton("Go into the Ramen Bar");
  menuLink.addClass("menuLink");
  menuLink.mousePressed(linkmenu);
  menuLink.position(width/2.9,height/4);

  //companiesMenu = createSelect();
  //for(let i = 0; i < companies.length; i++){
    //let companyName = companies[i].name;
    //companiesMenu.option(companyName);
  //}

  //menuLink.position(width/2, 50);

  //when menu is changed, trigger companyColor function
  //companiesMenu.changed(companyColor);
  //print(companiesData);

  eating = createButton("eating");
  eating.addClass("eating");
  eating.mousePressed(playSound);

  eating.position(width/2, height/10);



  img = createImg("images/11.gif");
  img.position(0, 0);
  img.attribute('width', windowWidth);
  img.attribute('height', windowHeight);
  img.style('position', 'absolute');
  img.style('z-index', '-1');

}


function linkmenu(){
  location.href = "menuLink.html";
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
