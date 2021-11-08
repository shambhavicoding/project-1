//https://teachablemachine.withgoogle.com/models/0SPnPy--v/
prediction1="";
prediction2="";

Webcam.set({
    height:350,
    width:300,
    image_format:'png'
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0SPnPy--v/',modelLoaded);

function modelLoaded(){
    console.log('model loaded!')
}
function speak(){
    var synth=window.speechSynthesis;
    hand_gesture_1="The first predicition is"+prediction1;
    hand_gesture_2="The first prediction is"+prediction2;
    var utterThis=new SpeechSynthesisUtterance(hand_gesture_1+hand_gesture_2);
}
