Status = "";
objects = [];

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(520, 250);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
}

function start() {
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model_Loaded");
    Status = true;
}

function draw() {
    image(video, 0, 0, 500, 400);
    if (Status != "") {
        object_Detector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            console.log(objects.length);
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ff0000");
        }
    }
}