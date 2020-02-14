let img44;


function preload() {
  img44 = loadImage("images/6666.jpg");
}
function setup() {
  img = createImg("images/6666.jpg");
  img.position(0, 0);
  img.attribute('width', windowWidth);
  img.attribute('height', windowHeight);
  img.style('position', 'absolute');
  img.style('z-index', '-1');

}
