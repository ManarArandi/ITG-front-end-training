let openModalButton = document.getElementById('modal-button');
let modal = document.getElementById('modal-container');
let closeModalButton = document.getElementById('modal-close-button');

let menuIcon = document.getElementById('menuIcon');
let menuMobile = document.getElementById('menuMobile');
let show=document.getElementById("show");

let frame=document.getElementById("player")
/*--------------MOBILE MENU CODE------------------*/
menuIcon.onclick = function () {
  if (show.style.height === "0px" || show.style.height == '') {         /*with out OR will not work at first click*/
    document.getElementById("show").style.height = "286px";
    menuMobile.style.display = "block";

  } else {
  show.style.height = "0px"; /*menuMobile.style.display = "none";*/
  }
}
/*------------------YOUTUBE VIDEO CODE------------------*/

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '5XtvHJbq5kw',
    playerVars: {
      'playsinline': 1
    },
    events: {
      /*'onReady': onPlayerReady,*/
    }
  });
}
/*function onPlayerReady(event) {
  event.target.playVideo();
}*/


openModalButton.onclick = function () {
  modal.style.display = "block";
 /* player.playVideo();*/
}

closeModalButton.onclick = function () {
 /* player.stopVideo();*/
  modal.style.display = "none";
  frame.setAttribute('src',"https://www.youtube.com/embed/5XtvHJbq5kw?playsinline=1&amp;enablejsapi=1&amp;widgetid=1")
}


/*
var windowInitWidth = window.innerWidth;
/*var windowInitWidth = document.getElementsByClassName('img-div').offsetWidth;*
var nums = document.getElementsByClassName('description');

// get the value of num font-size
var numFontSize = window.getComputedStyle(nums[0]).getPropertyValue("font-size");
numFontSize = Number(numFontSize.replace("px", ""));

console.log(numFontSize);

// update the text font-size when resizing the window
window.addEventListener("resize", function() {
  for( var i = 0; i < nums.length; i++) {
    nums[i].style.fontSize = (window.innerWidth/ windowInitWidth * numFontSize) + 'px';
    console.log(nums[i].style.fontSize)
  }
})
*/