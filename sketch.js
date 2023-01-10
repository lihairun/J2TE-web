let horizontalS = document.getElementById ("horizontalDiv");
let verticalS = document.getElementById ("verticalDiv");
let book = document.getElementById ("verticalBook");
let coverS = document.getElementById ("coverDiv");

let shadow = document.getElementById ("mask");
let mask = document.getElementById ("cover");
let maskWidth = 20;
let maskOffset = 0;

let mousePosition = document.getElementById("mousePosition");
let guideV = document.getElementById("guideV");
let guideH = document.getElementById("guideH");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  background(255, 255, 255, 0);

  //auto snap//
  snap();

  // if (document.getElementById("coverDiv").style.display === "block") {
  //   noCursor();
  // } else {
  //   cursor(CROSS);
  // }
  // cursor(CROSS);

  let multiple = windowWidth / windowHeight;
  horizontalS.scrollLeft = multiple * verticalS.scrollTop;
  book.scrollTop = verticalS.scrollTop;
  coverS.scrollTop = verticalS.scrollTop;
  // print(horizontalS.scrollLeft);
  // print(verticalS.scrollTop);
  // print(dy);

  if (maskWidth > 20) {
    maskWidth -= maskOffset*0.5;
  } else {
    maskWidth = 20;
  }

  if (shadow.style.display === "none"){
    maskWidth = 1000;
  } else if (shadow.style.display === "block" && maskWidth >= 1000) {
    maskWidth = 20;
  }

  shadow.style.width = maskWidth + "vw";
  mask.style.MaskSize = maskWidth + "%";
  mask.style.webkitMaskSize = maskWidth + "%";

  let x = mouseX - maskWidth*0.5*0.01*windowWidth;
  let y = mouseY - maskWidth*0.163122633*0.01*windowWidth;

  mask.style.MaskPosition = x + "px" + " " + y + "px";
  mask.style.webkitMaskPosition = x + "px" + " " + y + "px";

  shadow.style.left= x + "px";
  shadow.style.top= y + "px";

  mousePosition.style.left = mouseX + "px";
  mousePosition.style.top = mouseY + "px";
  let mousex = floor(mouseX);
  let mousey = floor(mouseY);
  let mouseScale = floor(maskWidth) / 100;
  mousePosition.innerHTML = "(" + mousex + ", " + mousey + ", " + mouseScale + ")";

  let guidex = mouseX - 12;
  let guidey = mouseY - 16;
  guideV.style.left = guidex + "px";
  guideH.style.top = guidey + "px";

  // print(x);
  // print(maskWidth);
}

function mouseMoved() {
  maskOffset = 0.5;
  maskWidth += maskOffset;
}

function mouseWheel(event) {
  // horizontalImg.style.left -= event.delta;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let dy;

function snap() {
  if(verticalS.scrollTop >0 && verticalS.scrollTop <= windowHeight*0.2) {
    dy = floor(0 - verticalS.scrollTop*0.05);
    verticalS.scrollTop += dy;
  } // #1
  else if(verticalS.scrollTop >= windowHeight*0.85 && verticalS.scrollTop < windowHeight) {
    dy = ceil((windowHeight - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight && verticalS.scrollTop <= windowHeight*1.15) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.875*2 && verticalS.scrollTop < windowHeight*2) {
    dy = ceil((windowHeight*2 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*2 && verticalS.scrollTop <= windowHeight*1.125*2) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*2 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.9*3 && verticalS.scrollTop < windowHeight*3) {
    dy = ceil((windowHeight*3 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*3 && verticalS.scrollTop <= windowHeight*1.1*3) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*3 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.925*4 && verticalS.scrollTop < windowHeight*4) {
    dy = ceil((windowHeight*4 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*4 && verticalS.scrollTop <= windowHeight*1.075*4) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*4 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.95*5 && verticalS.scrollTop < windowHeight*5) {
    dy = ceil((windowHeight*5 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*5 && verticalS.scrollTop <= windowHeight*1.05*5) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*5 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.975*6 && verticalS.scrollTop < windowHeight*6) {
    dy = ceil((windowHeight*6 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*6 && verticalS.scrollTop <= windowHeight*1.025*6) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*6 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.98*7 && verticalS.scrollTop < windowHeight*7) {
    dy = ceil((windowHeight*7 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*7 && verticalS.scrollTop <= windowHeight*1.02*7) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*7 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.985*8 && verticalS.scrollTop < windowHeight*8) {
    dy = ceil((windowHeight*8 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*8 && verticalS.scrollTop <= windowHeight*1.015*8) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*8 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.985*9 && verticalS.scrollTop < windowHeight*9) {
    dy = ceil((windowHeight*9 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*9 && verticalS.scrollTop <= windowHeight*1.015*9) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*9 - verticalS.scrollTop) * 0.05;
  } else if(verticalS.scrollTop >= windowHeight*0.985*10 && verticalS.scrollTop < windowHeight*10) {
    dy = ceil((windowHeight*10 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*10 && verticalS.scrollTop <= windowHeight*1.015*10) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*10 - verticalS.scrollTop) * 0.05;
  } // #11
  else if(verticalS.scrollTop >= windowHeight*0.985*11 && verticalS.scrollTop < windowHeight*11) {
    dy = ceil((windowHeight*11 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*11 && verticalS.scrollTop <= windowHeight*1.01*11) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*11 - verticalS.scrollTop) * 0.05;
  } // #12
  else if(verticalS.scrollTop >= windowHeight*0.99*12 && verticalS.scrollTop < windowHeight*12) {
    dy = ceil((windowHeight*12 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*12 && verticalS.scrollTop <= windowHeight*1.01*12) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*12 - verticalS.scrollTop) * 0.05;
  } // #13
  else if(verticalS.scrollTop >= windowHeight*0.99*13 && verticalS.scrollTop < windowHeight*13) {
    dy = ceil((windowHeight*13 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*13 && verticalS.scrollTop <= windowHeight*1.01*13) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*13 - verticalS.scrollTop) * 0.05;
  } // #14
  else if(verticalS.scrollTop >= windowHeight*0.99*14 && verticalS.scrollTop < windowHeight*14) {
    dy = ceil((windowHeight*14 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*14 && verticalS.scrollTop <= windowHeight*1.01*14) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*14 - verticalS.scrollTop) * 0.05;
  } // #15
  else if(verticalS.scrollTop >= windowHeight*0.98*15 && verticalS.scrollTop < windowHeight*15) {
    dy = ceil((windowHeight*15 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*15 && verticalS.scrollTop <= windowHeight*1.02*15) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*15 - verticalS.scrollTop) * 0.05;
  } // #16
  else if(verticalS.scrollTop >= windowHeight*0.99*16 && verticalS.scrollTop < windowHeight*16) {
    dy = ceil((windowHeight*16 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*16 && verticalS.scrollTop <= windowHeight*1.01*16) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*16 - verticalS.scrollTop) * 0.05;
  } // #17
  else if(verticalS.scrollTop >= windowHeight*0.99*17 && verticalS.scrollTop < windowHeight*17) {
    dy = ceil((windowHeight*17 - verticalS.scrollTop)*0.05);
    verticalS.scrollTop += dy;
  } else if (verticalS.scrollTop > windowHeight*17 && verticalS.scrollTop <= windowHeight*1.01*17) {
    verticalS.scrollTop = verticalS.scrollTop + (windowHeight*17 - verticalS.scrollTop) * 0.05;
  }
}

//---------------------------------------------------------------------------------------------------
//new canvas #1
var s1 = function(sketch) {
  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.background(255,255,255,0);
    // canvas1.position(0,0);
    canvas1.parent("div1");
  }

  sketch.draw = function() {
    sketch.clear();
    sketch.noStroke();
    sketch.fill(255);
    if (sketch.mouseX > 0 && sketch.mouseX < sketch.windowWidth && sketch.mouseY > 0 && sketch.mouseY < sketch.windowHeight) {
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 0.3*sketch.windowHeight, 0.3*sketch.windowHeight);
      sketch.drawingContext.filter = 'blur(75px)';
    }
  }

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }
};

new p5(s1);

//---------------------------------------------------------------------------------------------------
//new canvas #2
var s2 = function(sketch) {
  sketch.frames;
  sketch.spacecraft;

  sketch.setup = function() {
    let canvas2 = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    sketch.background(255,255,255,0);
    // canvas1.position(0,0);
    canvas2.parent("div3");
    sketch.frames = sketch.loadImage("images/frames.png");
    sketch.spacecraft = sketch.loadImage("images/spacecraft.png");


  }

  sketch.draw = function() {
    sketch.clear();

    if (sketch.mouseX > 0 && sketch.mouseX < sketch.windowWidth && sketch.mouseY > 0 && sketch.mouseY < sketch.windowHeight) {
      sketch.imageMode(CENTER);
      sketch.image(sketch.spacecraft, sketch.mouseX, sketch.mouseY, sketch.windowWidth*0.1, sketch.windowWidth*0.1034);
      sketch.image(sketch.frames, sketch.windowWidth/2, sketch.windowHeight/2, sketch.windowWidth, sketch.windowHeight);
    } else {
      sketch.clear();
    }

    sketch.stroke(150);
    sketch.strokeWeight(3);
    sketch.drawingContext.setLineDash([1, 18]);
    sketch.line(sketch.windowWidth*0.5, 0, sketch.mouseX, sketch.mouseY);
    sketch.line(0, sketch.windowHeight, sketch.mouseX, sketch.mouseY);
    sketch.line(sketch.windowWidth, sketch.windowHeight, sketch.mouseX, sketch.mouseY);
  }

  sketch.windowResized = function() {
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }
};

new p5(s2);

//---------------------------------------------------------------------------------------------------
//Seriously.js
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

var seriously, src, target, panorama;

seriously = new Seriously();
src = seriously.source('#videoElement');
target = seriously.target('#videoCanvas');
panorama = seriously.effect('panorama');

panorama.fov = 179;
panorama.source = src;
target.source = panorama;
seriously.go();

//---------------------------------------------------------------------------------------------------
//showHideDiv
var sound1 = document.getElementById("sound1");
var sound2 = document.getElementById("sound2");
var sound3 = document.getElementById("sound3");
sound1.volume = 0.1;
sound2.volume = 0;
sound3.volume = 0;

function showHideDiv1() {
  document.getElementById("coverDiv").style.display = "block";
  document.getElementById("maskDiv").style.display = "block";
  document.getElementById("mask").style.display = "block";
  document.getElementById("horizontalDiv").style.display = "block";
  document.getElementById("verticalDiv").style.display = "block";
  document.getElementById("verticalBook").style.display = "none";
  document.getElementById("imgLink1").style.opacity = "1";
  document.getElementById("imgLink2").style.opacity = "1";
  document.getElementById("imgLink3").style.opacity = "1";
  document.getElementById("imgLink4").style.opacity = "1";
  document.getElementById("numberLink1").style.opacity =
  document.getElementById("numberLink2").style.opacity =
  document.getElementById("numberLink3").style.opacity =
  document.getElementById("numberLink4").style.opacity =
  document.getElementById("numberLink5").style.opacity =
  document.getElementById("numberLink6").style.opacity =
  document.getElementById("numberLink7").style.opacity =
  document.getElementById("numberLink8").style.opacity =
  document.getElementById("numberLink9").style.opacity =
  document.getElementById("numberLink10").style.opacity =
  document.getElementById("numberLink11").style.opacity =
  document.getElementById("numberLink12").style.opacity = "1";
  sound1.volume = 0.1;
  sound2.volume = 0;
  sound3.volume = 0;
  return false;
}

function showHideDiv2() {
  document.getElementById("coverDiv").style.display = "none";
  document.getElementById("maskDiv").style.display = "none";
  document.getElementById("mask").style.display = "none";
  document.getElementById("horizontalDiv").style.display = "block";
  document.getElementById("verticalDiv").style.display = "block";
  document.getElementById("verticalBook").style.display = "none";
  document.getElementById("imgLink1").style.opacity = "0.65";
  document.getElementById("imgLink2").style.opacity = "0.65";
  document.getElementById("imgLink3").style.opacity = "0.65";
  document.getElementById("imgLink4").style.opacity = "0.65";
  document.getElementById("numberLink1").style.opacity =
  document.getElementById("numberLink2").style.opacity =
  document.getElementById("numberLink3").style.opacity =
  document.getElementById("numberLink4").style.opacity =
  document.getElementById("numberLink5").style.opacity =
  document.getElementById("numberLink6").style.opacity =
  document.getElementById("numberLink7").style.opacity =
  document.getElementById("numberLink8").style.opacity =
  document.getElementById("numberLink9").style.opacity =
  document.getElementById("numberLink10").style.opacity =
  document.getElementById("numberLink11").style.opacity =
  document.getElementById("numberLink12").style.opacity = "0.65";
  sound1.volume = 0.3;
  sound2.volume = 0.1;
  sound3.volume = 0;
  return false;
}

function showHideDiv3() {
  document.getElementById("coverDiv").style.display = "none";
  document.getElementById("maskDiv").style.display = "none";
  document.getElementById("mask").style.display = "none";
  document.getElementById("horizontalDiv").style.display = "none";
  document.getElementById("verticalDiv").style.display = "block";
  document.getElementById("verticalBook").style.display = "none";
  document.getElementById("imgLink1").style.opacity = "0.5";
  document.getElementById("imgLink2").style.opacity = "0.5";
  document.getElementById("imgLink3").style.opacity = "0.5";
  document.getElementById("imgLink4").style.opacity = "0.5";
  document.getElementById("numberLink1").style.opacity =
  document.getElementById("numberLink2").style.opacity =
  document.getElementById("numberLink3").style.opacity =
  document.getElementById("numberLink4").style.opacity =
  document.getElementById("numberLink5").style.opacity =
  document.getElementById("numberLink6").style.opacity =
  document.getElementById("numberLink7").style.opacity =
  document.getElementById("numberLink8").style.opacity =
  document.getElementById("numberLink9").style.opacity =
  document.getElementById("numberLink10").style.opacity =
  document.getElementById("numberLink11").style.opacity =
  document.getElementById("numberLink12").style.opacity = "0.5";
  sound1.volume = 0.1;
  sound2.volume = 0.4;
  sound3.volume = 0;
  return false;
}

function showHideDiv4() {
  document.getElementById("coverDiv").style.display = "none";
  document.getElementById("maskDiv").style.display = "none";
  document.getElementById("mask").style.display = "none";
  document.getElementById("horizontalDiv").style.display = "none";
  document.getElementById("verticalDiv").style.display = "block";
  document.getElementById("verticalBook").style.display = "block";
  document.getElementById("imgLink1").style.opacity = "0.35";
  document.getElementById("imgLink2").style.opacity = "0.35";
  document.getElementById("imgLink3").style.opacity = "0.35";
  document.getElementById("imgLink4").style.opacity = "0.35";
  document.getElementById("numberLink1").style.opacity =
  document.getElementById("numberLink2").style.opacity =
  document.getElementById("numberLink3").style.opacity =
  document.getElementById("numberLink4").style.opacity =
  document.getElementById("numberLink5").style.opacity =
  document.getElementById("numberLink6").style.opacity =
  document.getElementById("numberLink7").style.opacity =
  document.getElementById("numberLink8").style.opacity =
  document.getElementById("numberLink9").style.opacity =
  document.getElementById("numberLink10").style.opacity =
  document.getElementById("numberLink11").style.opacity =
  document.getElementById("numberLink12").style.opacity = "0.35";
  sound1.volume = 0;
  sound2.volume = 0.1;
  sound3.volume = 0.5;
  return false;
}

// function changeOpacity1() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "1";
// }
//
// function changeOpacity2() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.95";
// }
//
// function changeOpacity3() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.9";
// }
//
// function changeOpacity4() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.85";
// }
//
// function changeOpacity5() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.8";
// }
//
// function changeOpacity6() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.75";
// }
//
// function changeOpacity7() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.7";
// }
//
// function changeOpacity8() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.65";
// }
//
// function changeOpacity9() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.6";
// }
//
// function changeOpacity10() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.55";
// }
//
// function changeOpacity11() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.5";
// }
//
// function changeOpacity12() {
//   document.getElementById("numberLink1").style.opacity =
//   document.getElementById("numberLink2").style.opacity =
//   document.getElementById("numberLink3").style.opacity =
//   document.getElementById("numberLink4").style.opacity =
//   document.getElementById("numberLink5").style.opacity =
//   document.getElementById("numberLink6").style.opacity =
//   document.getElementById("numberLink7").style.opacity =
//   document.getElementById("numberLink8").style.opacity =
//   document.getElementById("numberLink9").style.opacity =
//   document.getElementById("numberLink10").style.opacity =
//   document.getElementById("numberLink11").style.opacity =
//   document.getElementById("numberLink12").style.opacity = "0.45";
// }
