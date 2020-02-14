let canvas;
let companiesMenu;//drop down menu
let companiesData;// json data
let companies; // stores the company names
let ramenSlider;
let sliderFrequency = 200;
//empty logo array
let allLogos = [];
let imageX = [];
let imageY = [];

function preload(){
  //loading the json and calling the loadImages function
  loadJSON("interfaceCompanies.json", loadImages);


}

//json data will be loaded in the data vatiable
function loadImages(companiesData){
  companies = companiesData.companies;
  for(let i = 0; i < companies.length; i++){
    allLogos[i] = loadImage("images/" + i + ".png");
  }
  print(allLogos.length);

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);

  ramenSlider = createSlider(0, 40, 0);
  ramenSlider.addClass('nuSlider');
  ramenSlider.hide()

  companiesMenu = createSelect();

  //companies = companiesData.companies;

//POPULATING our menu with company names
  for(let i = 0; i < companies.length; i++){
    let companyName = companies[i].name;
    companiesMenu.option(companyName);
  }

//when menu is changed, trigger companyColor function
  companiesMenu.changed(companyColor);
  print(companiesData);

}
function companyColor(){
  //slider.show();
  for(let i = 0; i < companies.length; i++){
    let companyName = companies[i].name;

    let colorR = companies[i].r;
    let colorG = companies[i].g;
    let colorB = companies[i].b;
    let frequency = companies[i].frequency;

    //check and see what company is selected
    //give us its r g b values
    if(companiesMenu.value() == companies[i].name){
      // if(companiesMenu.value() == 'Ramen'){
      //   ramenSlider.show();
      //   for(let s = 0; s < ramenSlider.value(); s++){
      //   imageX.push(random(width));
      //   imageY.push(random(height));
      //   print(imageX.length);
      // }
      // }
      background(colorR, colorG, colorB);
      print(frequency);
      sliderFrequency = frequency;

      // slider.value() = map(slider.value(), 0, 200, 0, frequency)
      for(let j = 0; j < frequency; j++){

        //
        let posX = random(width);
        let posY = random(height);
        image(allLogos[i],posX,posY, 40, 40);
      }
    }

  }

  //print(slider.value());


}

function draw(){


}
