// Get Carousel Buttons
var leftBtn = document.querySelector('#id_btn_left');
var rightBtn = document.querySelector('#id_btn_right');
var centerImg = document.querySelector('#id_img_center');
var playPauseImgBtn = document.querySelector('#slider_play_id');
var leftImgBtn = document.querySelector('#slider_left_id');
var rightImgBtn = document.querySelector('#slider_right_id');

// Store the names of the images
var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var end = imgs.length - 1;

//init image indexes
var indexL = end;
var indexC = 0; 
var indexR = 1;

//initialize carousel
leftBtn.src = "/imgs/carousel/" + imgs[indexL];
rightBtn.src = "/imgs/carousel/" + imgs[indexR];


//clicks flood check flag
var hasStartedSwipe = false;

//is carousel paused check flag
var isCarouselPaused = true;

//global interval
var interval;

//match mobile media variable

window.addEventListener("resize",() => {
    let matchMobile = window.matchMedia("(max-width: 480px)");

    if (matchMobile.matches) {
        leftImgBtn.src = "/imgs/icons/actions/icn_back_rounded.png";
        if (isCarouselPaused) playPauseImgBtn.src = "/imgs/icons/actions/icn_play_rounded.png";
        else playPauseImgBtn.src = "/imgs/icons/actions/icn_pause_rounded.png";
        rightImgBtn.src = "/imgs/icons/actions/icn_next_rounded.png";
    }else{
        leftImgBtn.src = "/imgs/icons/actions/icn_back.png";
        if (isCarouselPaused) playPauseImgBtn.src = "/imgs/icons/actions/icn_play.png";
        else playPauseImgBtn.src = "/imgs/icons/actions/icn_pause.png";        
        rightImgBtn.src = "/imgs/icons/actions/icn_next.png";
    }
});

leftBtn.addEventListener('click',() => { pressedLeft(); } );
rightBtn.addEventListener('click',() => { pressedRight(); } );
leftImgBtn.addEventListener('click',() => { pressedLeft(); } );
rightImgBtn.addEventListener('click',() => { pressedRight(); } );

playPauseImgBtn.addEventListener('click',() => {
        
        if (isCarouselPaused){
            playPauseImgBtn.src = "/imgs/icons/actions/icn_pause.png";
            isCarouselPaused = false;
            interval = setInterval("pressedRight()" , 5000);
            
        }else{
            clearInterval(interval);
            playPauseImgBtn.src = "/imgs/icons/actions/icn_play.png";
            isCarouselPaused = true;
        }
    }
);

function prepareCarouselImages(){
    
    leftBtn.classList.add('transparentEffect');
    centerImg.classList.add('transparentEffect');
    rightBtn.classList.add('transparentEffect');

    setTimeout(function(){
        leftBtn.classList.remove('transparentEffect');
        leftBtn.src = "/imgs/carousel/" + imgs[indexL];

        centerImg.classList.remove('transparentEffect');
        centerImg.src = "/imgs/carousel/" + imgs[indexC];

        rightBtn.classList.remove('transparentEffect');
        rightBtn.src = "/imgs/carousel/" + imgs[indexR];

    }, 300);
}

function pressedLeft(){
    if (hasStartedSwipe) return;

    hasStartedSwipe = true;

    indexR = indexC;
    indexC = indexL;
    indexL = ((indexC <= 0)? end : (indexC - 1));

    prepareCarouselImages();

    hasStartedSwipe = false;
}

function pressedRight(){
    if (hasStartedSwipe) return;

    hasStartedSwipe = true;

    indexL = indexC;
    indexC = indexR;
    indexR = ((indexC >= end)? 0 : (indexC + 1));

    prepareCarouselImages();

    hasStartedSwipe = false;
}