//video section
var myVideo = document.getElementById("video1"); 
var myVideo2 = document.getElementById("video2"); 


function play() { 
    if (myVideo2.pause)
    myVideo2.play(); 
  }
  function pause() { 
    myVideo2.pause
}

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 550; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 500; 
}

//canvas section
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#0000ff";
ctx.fillRect(0, 0, 80, 100);

