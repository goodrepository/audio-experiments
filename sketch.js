
let title = null;
let pos = {
  x: 0,
  y: 0
};


function setup () {

    var WIDTH = 3000;
    var HEIGHT = 3000;
    var NUMBER = 200;

    // padding will increase the size of stage
    // so scrolling will look smoother
    var PADDING = 500;

    var canvas = createCanvas((WIDTH + PADDING * 2), (HEIGHT + PADDING * 2));

    console.log(gsap)



    gsap.to(pos, {
        x: 100,
        y: 100,
        duration: 2,
        repeat: -1
      });




    /*********** SCROLL STUFF -- NO NEED TO TOUCH - TY! ************/
    var scrollContainer = document.getElementsByTagName("main")[0];
    var largeContainer = document.createElement("div");
    largeContainer.id = "large-container";
    largeContainer.appendChild(canvas.canvas);
    // scrollContainer.remove(canvas.canvas);
    scrollContainer.appendChild(largeContainer);



    function repositionStage() {
        var dx = scrollContainer.scrollLeft - PADDING;
        var dy = scrollContainer.scrollTop - PADDING;
        console.log('canvas', canvas.canvas.style.transform)
        canvas.canvas.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
        canvas.canvas.offsetLeft = -dx;
        canvas.canvas.offsetTop = -dy;
    // canvas.y(-dy);
    }
    scrollContainer.addEventListener('scroll', repositionStage);
    repositionStage();
    /*********** SCROLL STUFF -- NO NEED TO TOUCH - TY! ************/
}

function draw () {
    console.log(pos.x)
    
    // background(220);
    fill(65);
    text("p5 with gsap", pos.x, pos.y);
    // console.log('title: ', title)
} 