
let title = null;
let pos = {
  x: 0,
  y: 0
};

let positionsX = [];
let positionsY = [];
let r = [];
let g = [];
let b = [];
let a = [];

let sound, amplitude, fft, size;

function preload(){
  sound = loadSound('./assets/music/jinsang-affection.m4a');
}

function setup () {
    var canv = createCanvas(window.innerWidth, window.innerHeight);
    pixelDensity(1)
    var canvas = document.getElementsByTagName("canvas")[0];
    console.log(document, canvas);
    // console.log(gsap);
    var ctx = canvas.getContext("2d");

    // canvas.mousePressed(togglePlay);
    amplitude = new p5.Amplitude();
    fft = new p5.FFT([1.0], 128);
    sound.amp(0.2);
    console.log(fft)


    for (let i = 0; i < 50; i++) {
      var randomX = Math.floor(Math.random() * window.innerWidth);
      var randomY = Math.floor(Math.random() * window.innerHeight);
      var randomR = Math.floor(Math.random() * 255);
      var randomG = Math.floor(Math.random() * 255);
      var randomB = Math.floor(Math.random() * 255);
      var randomA = Math.floor(Math.random() * 1);
      var randomSizer = Math.floor(Math.random() * 10);
      let c = color(randomR, randomG, randomB, [randomA]);
      fill(c)
      stroke(c)
      ellipse(randomX, randomY, randomSizer * size, randomSizer * size);
    }

    console.log(randomX)

    

    /*********** SCROLL AND CANVAS STUFF -- NO NEED TO TOUCH - TY! ************/
    var scrollContainer = document.getElementsByTagName("main")[0];
    var largeContainer = document.createElement("div");
    largeContainer.id = "large-container";
    largeContainer.appendChild(canvas);
    // scrollContainer.remove(canvas.canvas);
    scrollContainer.appendChild(largeContainer);
    /*********** SCROLL AND CANVAS STUFF -- NO NEED TO TOUCH - TY! ************/
}

function mousePressed() {
  console.log('sound:', sound)
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }

  drawCircles(50);
}


function draw () {

  background(000);
  text('tap to play', 20, 20);

  let level = amplitude.getLevel();
  size = map(level, 0, 1, 10, 400);
  // ellipse(width/2, height/2, size, size);
  // ellipse(20, 200, size * 3, size);

  fill(255, 100, 105);
  ellipse(width/2, height/2, size * 5, size * 5);


  // let spectrum = fft.analyze();
  // noStroke();
  // fill(255, 0, 255);
  // for (let i = 0; i< spectrum.length; i++){
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, 20, h )
  // }

  let waveform = fft.waveform();
  console.log(waveform)
  noFill();
  beginShape();
  stroke("#fff");
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();


} 