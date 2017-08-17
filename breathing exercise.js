
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

function Inhale() {
  document.getElementById("bubble").style.width = "400px".height = "400px"
}

function Exhale() {
  document.getElementById("bubble").style.width = "204px".height = "204px"
}

var myAudio = document.getElementById("rain")
function togglePlay() {
  if (rain.paused){
    rain.play();
  } else {
    rain.pause();
  }
};

var myAudio2 = document.getElementById("sea")
function togglePlay2() {
  if (sea.paused){
    sea.play();
  } else {
    sea.pause();
  }
};

var myAudio3 = document.getElementById("fire")
function togglePlay3() {
  if (fire.paused){
    fire.play();
  } else {
    fire.pause();
  }
};
