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

let step = 0;
let offset = 0;

const sliderLeft = document.querySelector('.slider__left')
const sliderRight = document.querySelector('.slider__right')

    function draw(){
        let sliderLink = document.createElement('a');
        let sliderImg = document.createElement('img');
        sliderLink.classList.add('slider__link')
        document.querySelector('#slide').appendChild(sliderLink);
        sliderLink.appendChild(sliderImg);
        sliderLink.href = slider[step];
        sliderImg.src = slideImg[step];
        if(sliderLeft){
            let slides2 = document.querySelectorAll('.slider__link')
            slideLeft.onclick = () => {

                slides2.forEach(element => {
                    element.style.transform = 'translateX(' + (offset*128 + 128) +'px)'
                });

                if(step === 0){
                    step = slides.length - 1;
                }else{
                    step--;
                }
                setTimeout(function(){
                    slides2[0].remove()
                    draw()
                }, 0);
            }
        }
        if(slideRigth){
            
            let slides2 = document.querySelectorAll('.slider__link')
            slideRigth.onclick = () => {
                slides2.forEach(element => {
                    element.style.transform = 'translateX(' + (-offset*128 - 128) +'px)'
                });
                if(step + 1 === slides.length){
                    step = 0
                }else{
                    step++
                }


                setTimeout(function(){
                    slides2[0].remove()
                    draw()
                }, 0);    
            }
        }   
    }

    draw();
