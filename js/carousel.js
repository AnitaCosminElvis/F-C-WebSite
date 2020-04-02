// Get Carousel Buttons
var leftBtn = document.querySelector('#id_btn_left');
var rightBtn = document.querySelector('#id_btn_right');
var centerImg = document.querySelector('#id_img_center');

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

    }, 400);
}

leftBtn.addEventListener('click',() => {
        
        if (hasStartedSwipe) return;
        
        hasStartedSwipe = true;
    
        indexR = indexC;
        indexC = indexL;
        indexL = ((indexC <= 0)? end : (indexC - 1));
        
        prepareCarouselImages();
        
        hasStartedSwipe = false;
    }
);

rightBtn.addEventListener('click',() => {
        
        if (hasStartedSwipe) return;
        
        hasStartedSwipe = true;
    
        indexL = indexC;
        indexC = indexR;
        indexR = ((indexC >= end)? 0 : (indexC + 1));

        prepareCarouselImages();
        
        hasStartedSwipe = false;

    }
);