const blockWidth = 300;
const blockHeight = 30; // Define blockHeight
let currentBlock;

let blockDir;
let blockSpeed;

let placedBlocks = []; 

const statePlaying = "playing";
const stateLose = "lose";
const stateWin = "win";

let menuState = statePlaying;
let scrollOffset = 0;

let bgMusic;
let placeSound;
let loseSound;

function preload() {
  soundFormats('mp3');
  bgMusic = loadSound('background.mp3');
  placeSound = loadSound('block.mp3');
  loseSound = loadSound('over.mp3');
}

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  
  textAlign(CENTER, CENTER);
  
  bgMusic.loop();
  
  newGame();
}

function draw() {
  drawBackground();
  
  push();
  translate(0, scrollOffset);
  
  if(menuState === statePlaying) { 
    textSize(blockHeight);
    updateBlock();
    drawBlocks();
  } else if(menuState === stateLose) {
    textSize(blockHeight * 2);
    fill(255, 0, 0);
    text("Sorry, you lost :,(", width/2, -scrollOffset + height/2);
    textSize(blockHeight);
    text("Press space to start a new game!", width/2, -scrollOffset + height * 3/4);
  } else if(menuState === stateWin) {
    textSize(blockHeight * 2);
    fill(0, 255, 0);
    text("Congrats, you won!", width/2, -scrollOffset + height/2);
    textSize(blockHeight);
    text("Press space to start a new game!", width/2, -scrollOffset + height * 3/4);
  }  
  
  pop();
}

function keyReleased() {
  if(key === " ") {
    if(menuState === statePlaying) {
      placeBlock(); 
    } else {
      newGame();
      menuState = statePlaying;
      bgMusic.loop();
    }
  }
}

function newGame() {
  currentBlock = createVector(0, height - blockHeight, blockWidth);
  
  blockDir = 1;
  blockSpeed = 3;
  
  placedBlocks = [];
  scrollOffset = 0;
}

function updateBlock() {
  currentBlock.x += blockDir * blockSpeed;
  
  if(currentBlock.x < 0) {
    blockDir = 1;
  }
  if(currentBlock.x + currentBlock.z > width) {
    blockDir = -1;
  }  
}

function drawBlocks() {
  // Draw current block with gradient
  drawGradientRect(currentBlock.x, currentBlock.y, currentBlock.z, blockHeight, color(255, 0, 0), color(255, 100, 100));
  
  // Draw placed blocks
  for(let block of placedBlocks) {
    drawGradientRect(block.x, block.y, block.z, blockHeight, color(50), color(100));
  }
  
  // Display score
  fill(0);
  text(placedBlocks.length, blockHeight, -scrollOffset + blockHeight);
}

function drawBackground() {
  for(let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(200, 220, 255), color(255, 255, 255), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawGradientRect(x, y, w, h, color1, color2) {
  for(let i = 0; i < h; i++) {
    let inter = map(i, 0, h, 0, 1);
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(x, y + i, x + w, y + i);
  }
}

function placeBlock() {
  const prevBlock = placedBlocks[placedBlocks.length - 1];
  
  let newWidth = blockWidth;
  
  if(prevBlock) {
    const leftEdge = max(prevBlock.x, currentBlock.x);
    const rightEdge = min(prevBlock.x + prevBlock.z, currentBlock.x + currentBlock.z);

    newWidth = rightEdge - leftEdge;
    
    currentBlock.x = leftEdge;
    currentBlock.z = newWidth;
  }
  
  if(newWidth <= 0) {
    loseSound.play();
    bgMusic.stop(); // Stop background music
    menuState = stateLose;
    return;
  }
  
  placeSound.play();
  placedBlocks.push(currentBlock);
  
  blockSpeed *= 1.1;
  
  newBlock(newWidth);
}

function newBlock(newWidth) {
  const blockStackHeight = (placedBlocks.length + 1) * blockHeight;
  
  if(blockStackHeight > height) {
    scrollOffset = height - blockStackHeight;
  }
  
  if(blockStackHeight + scrollOffset <= 0) {
    menuState = stateWin;
    return;
  }
  
  currentBlock = createVector(0, height - blockStackHeight, newWidth);
}

