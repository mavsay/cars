'use strict'

const query = (name) => document.querySelector(name);

const leftArrow = query('.slider-arrow__left');
const rightArrow = query('.slider-arrow__right');
const blockScreen = query('.sliderBlockItems');
const sliderLine = query('.slider-line');



const slide = query('.sliderItem');

let x;

const direction = (item) => {
  if (item === rightArrow) {
    x = blockScreen.clientWidth*0.34;
  };

  if (item === leftArrow) {
    x = -(blockScreen.clientWidth*0.34);
  };
  return x;
};

const scroll = (item) => {
  item.addEventListener('click', ()=> {
  blockScreen.scrollBy({
    top: 0,
    left: direction(item),
    behavior: 'smooth'
    });
  });
}

scroll(leftArrow);
scroll(rightArrow);

