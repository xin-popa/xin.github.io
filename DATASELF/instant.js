let img55;


function preload() {
  img55 = loadImage("images/88.jpg");
}
function setup() {
  img = createImg("images/88.jpg");
  img.position(0, 0);
  img.attribute('width', windowWidth);
  img.attribute('height', windowHeight);
  img.style('position', 'absolute');
  img.style('z-index', '-1');

}
