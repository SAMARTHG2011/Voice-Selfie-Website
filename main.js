var SpeechRecognition = window.webkitSpeechRecognition;
var reco = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    reco.start();
}

reco.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie"){
        console.log("taking selfie---");
        speak();

    }
    else{speak_error()}
    
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking Your Selfie in 5 seconds"


    var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera)



setTimeout(function()
{
    take_snapshot();
    save()
},5000
)
}
function speak_error(){
    var synth = window.speechSynthesis;

    speak_data = "Sorry I could not understand that Please say 'take my selfie'"


    var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);

}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality :99
});
camera = document.getElementById("camera");


function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = 
		'<video class = "dps_video" autoplay muted loop id="myVideo"><source src="dpsvideo (2).mp4" type="video/mp4"></video><img class = "img_cap" id="selfie_img" src="'+data_uri+'"></img>';
    })
}


function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}