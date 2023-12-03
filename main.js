
lx = 0;
ly = 0;
rx = 0;
ry = 0;
sl = 0;
statusSong1 = "";
scoreLeft = 0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(425, 210);

    video = createCapture(VIDEO);
    video.position(canvas.x, canvas.y);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload() {
    srk = loadSound('Darr Kiran.mp3');
    bshah = loadSound('shehar ki ladki.mp3');
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log('Got Results');
        console.log(results);

        lx = results[0].pose.leftWrist.x;
        ly = results[0].pose.leftWrist.y;
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;

        scoreLeft = results[0].pose.keypoints[9].score;
        console.error(scoreLeft);

    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    if (scoreLeft > 0.000002) {
        fill("#EE1C03");
        circle(lx, ly, 50);
        srk.play();
        document.getElementById('h2').innerHTML = 'Jaadu Teri Nazar';
    }
}
