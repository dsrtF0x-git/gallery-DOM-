let container = document.getElementById('thumbs');
container.addEventListener('click', event => {
  if (!event.target.closest('a')) {
    return;
  }
  event.preventDefault();
  let largeImage = document.getElementById('largeImg');
  largeImage.src = event.target.closest('a').href;
});