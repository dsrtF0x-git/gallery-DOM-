'use strict';

const container = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg'); 

container.addEventListener('click', event => {
  if (!event.target.closest('a')) {
    return;
  }

  event.preventDefault();

  largeImage.src = event.target.closest('a').href;
});