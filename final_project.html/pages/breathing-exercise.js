
//function Zoom() {
  //document.getElementById("bubble");

//}

//function expand() {
  //document.getElementById("bubble").style.width = "50".height = "100"
//}

//function resize() {
  //if document.getElementById("bubble").style.width = "204px".height = "204px"
     //document.getElementById("bubble").style.width = "400px".height = "400px"

//}

//function Inhale() {
  //document.getElementById("bubble").style.width = "400px".height = "400px";
//}

//function Exhale() {
  //document.getElementById("bubble").style.width = "204px".height = "204px";
//}

function exhale(){
  setTimeout(function(){document.getElementById("inhale").innerHTML=("Exhale");}, 3000);

}

function inhale(){
  setTimeout(function(){document.getElementById("inhale").innerHTML=("Inhale");}, 3000);
  exhale();
}

function changeToExhale() {
  setDuration = 2000;
  while (true) {
    if duration == 2000;
    document.getElementById("inhale").innerHTML=("Exhale");
  }
  else (false) {
  duration: 2000;
  document.getElementById("inhale").innerHTML=("Inhale");

}


function changeToInhale() {
  duration: 2000;
  document.getElementById("inhale").innerHTML=("Inhale");

}

function time() {
  while (true) {
    setTimeout(changeToExhale, 2000);
    setTimeout(changeToInhale, 2000);
  }
}

var myAudio = document.getElementById("rain");
function togglePlay() {
  if (rain.paused){
    rain.play();
  } else {
    rain.pause();
  }
};

var myAudio2 = document.getElementById("sea");
function togglePlay2() {
  if (sea.paused){
    sea.play();
  } else {
    sea.pause();
  }
};

var myAudio3 = document.getElementById("fire");
function togglePlay3() {
  if (fire.paused){
    fire.play();
  } else {
    fire.pause();
  }
};

var myAudio4 = document.getElementById("nightingales");
function togglePlay4() {
  if (nightingales.paused){
    nightingales.play();
  } else {
    nightingales.pause();
  }
};

var myAudio5 = document.getElementById("creek");
function togglePlay5() {
  if (creek.paused){
    creek.play();
  } else {
    creek.pause();
  }
};
