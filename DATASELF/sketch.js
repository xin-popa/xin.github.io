let meData;
let birdData;
let canvas;
let birdOptions;
let catsData;
let catsCompanies;

function preload(){
  meData = loadJSON("me.json");
  birdData = loadJSON("birds.json");
  catsData = loadJSON("cats.json");
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(0);


  birdOptions = birdData.birds;


  catsCompanies = catsData.cats;

  for(let i = 0; i < catsCompanies.length; i++){
    createP(catsCompanies[int(random(catsCompanies.length))]);
  }
  //print (birdOptions);
  for(let i = 0; i < birdOptions.length; i++){
    let birdName = birdOptions[i].name;
    let birdWingspan = birdOptions[i].wingspan;
    print(birdName);
    createElement("h1", birdName);
    print(birdWingspan);
    createP(birdWingspan);


  }
  fill(255);
  textSize(45);
  text(meData.name, 40, 50);
  text(meData.born, 40, 90);
  ellipse(width/2, height/2, meData.age);
  ellipse(width/2, height/2+200, meData.weight);
}

function draw() {

}
