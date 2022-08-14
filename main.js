Status = "";
input_text = "";

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(520, 250);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
}

function start() {
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model_Loaded");
    Status = true;
}

function draw() {
    image(video, 0, 0, 500, 400);
}