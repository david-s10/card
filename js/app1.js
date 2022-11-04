"use strict"

let slides = document.querySelectorAll('.slider__link');
let slidesImg = document.querySelectorAll('.slider__img')

let slider = [];
let slideImg = [];
const slideRigth = document.querySelector('.slider__rigth');
const slideLeft = document.querySelector('.slider__left');

for (let index = 0; index < slides.length; index++) {
    slider[index] = slides[index].href;
    slides[index].remove()
    
}
for (let index = 0; index < slidesImg.length; index++) {
    slideImg[index] = slidesImg[index].src;  
}

let step = 1;
let offset = 0;

function draw(){
    let linkSlider = document.createElement('a');
    let img = document.createElement('img');
    linkSlider.href = slider[step];
    img.src = slideImg[step];
    linkSlider.classList.add('slider__link');
    img.classList.add('slider__img')
    document.querySelector('#slide').appendChild(linkSlider);
    linkSlider.appendChild(img)
    linkSlider.style.left = offset*128 + 'px'

    if(step + 1 === slides.length) {
        step = 0;
    }else{
        step++;
    }
    offset = 1;
}


// btn rigth start

function btnSlideRigth() {
    if(slideRigth){
        slideRigth.onclick = null
        let slides2 = document.querySelectorAll('.slider__link');
        let offset2 = 0;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.left = offset2*128 - 128 + 'px'
            offset2++;    
        }
        setTimeout(function(){
            slides2[0].remove()
            slideRigth.onclick = btnSlideRigth;
            draw()  
        }, 1000);
    }
}

// btn rigth end

function btnSlideLeft() {
    if(slideLeft){
        slideLeft.onclick = null
        let slides2 = document.querySelectorAll('.slider__link');
        let offset2 = 0;
        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.transform = 'translateX(' + offset2*128 - 128 +'px)';
            offset2++;    
        }
        setTimeout(function(){
            slides2[0].remove()
            slideLeft.onclick = btnSlideLeft;
            draw()  
        }, 1000);
    }
}

slideLeft.onclick = btnSlideLeft;
slideRigth.onclick = btnSlideRigth;


draw();
draw();
