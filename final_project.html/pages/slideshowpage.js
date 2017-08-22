//function changePicture() {
  //document.getElementById("cute-animal1").src="cute-animals2.jpg"
  //document.getElementById("cute-animals1").src="cute-animals3.jpg"
//}

function showPicture() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src = "cute-animals.jpg"
}

function showPicture2() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src ="cute-animals2.jpg";
}

function showPicture3() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src="cute-animals3.jpg";
}

function showPicture4() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src="cute-animals4.jpg";
}
function showPicture5()  {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src="cute-animals5.jpg";
}
function showPicture6() {
  document.getElementById("cute-animal1").style.display= 'block'
  document.getElementById("cute-animal1").src="cute-animals6.jpg";
}

function showLandscape() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src= "natural-landscape.jpg";
}

function showLandscape2() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src= "natural-landscape2.jpg";
}

function showLandscape3() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src="natural-landscape3.jpg";
}

function showLandscape4() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src="natural-landscape4.jpg";
}
function showLandscape5() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src="natural-landscape5.jpg";
}
function showLandscape6() {
  document.getElementById("natural-landscape1").style.display='block';
  document.getElementById("natural-landscape1").src="natural-landscape6.jpg";
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
