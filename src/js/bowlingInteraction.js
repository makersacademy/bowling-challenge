function alertConfirm(alertMessage) {
    document.getElementById("system-messages").innerHTML=alertMessage;
}

function firstRoll(number, frame) {
    document.getElementById(frame).innerHTML=number;
}

function secondRoll(input, frame) {
    document.getElementById(frame).innerHTML=input;
    nextFrame();
}

function systemMessage(message) {
    document.getElementById(system-messages).innerHTML=message;
}

function alertConfirm() {
    document.getElementById(system-messages).innerHTML="";
}