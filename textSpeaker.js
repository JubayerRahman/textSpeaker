var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");
var TextInput = document.getElementById("text");
var speedinput  = document.getElementById("speed");
var utterance = new SpeechSynthesisUtterance(text);

playButton.addEventListener("click",()=>{
    playText(TextInput.value);
})

function playText(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        speechSynthesis.resume;

    }
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.rate.speedinput;
    utterance.addEventListener("end",()=>{
        TextInput.disabled =false;

    })
    TextInput.disabled =true;
    speechSynthesis.speak(utterance);

}


stopButton.addEventListener("click",()=>{
    speechSynthesis.cancel();
})
