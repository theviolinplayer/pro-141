noseX=0;
noseY=0;
right_wristY=0;
left_wristY=0;
right_wristX=0;
left_wristX=0;

function preload(){
    loadSound("missed.wav");
    loadSound("ball_touch_paddel.wav")
}

function setup() {
	canvas = createCanvas(300, 300);
    canvas.center()
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(300,300);
    video.hide()
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(error, results){
	if(error){
		console.error(error)
	}
	if(results.length > 0){
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  right_wristX= results[0].pose.rightWrist.x;
	  right_wristY= results[0].pose.rightWrist.y;
	  left_wristX= results[0].pose.leftWrist.x;
	  left_wristY= results[0].pose.leftWrist.y;
	}
}


function draw(){
    img(video, 0, 0, 300, 300);
	if(right_wristX>0.2 && right_wristY>0.2){
		r=Math.random(255);
		g=Math.random(255);
		b=Math.random(255);
		fill(r, g, b);
		stroke(r, g, b);
		circle(right_wristX, right_wristY, 1)
	}
}