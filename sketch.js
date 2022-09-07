

function setup () {

    var WIDTH = 3000;
    var HEIGHT = 3000;
    var NUMBER = 200;

    // padding will increase the size of stage
    // so scrolling will look smoother
    var PADDING = 500;

    var canvas = createCanvas((WIDTH + PADDING * 2), (HEIGHT + PADDING * 2));

    for (var i = 0; i < NUMBER; i++) {
        console.log(i)
    }


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
}

function draw () {
    background(220);
} x