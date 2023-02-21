let thumb = document.querySelector('.thumb');
function ubah(gambar) {
  thumb.src = gambar;
}

const pink = document.querySelector('.pinkTh'),
  red = document.querySelector('.redTh'),
  green = document.querySelector('.greenTh'),
  circle = document.querySelector('.circle'),
  menuBar = document.querySelector('.navbar i'),
  nav = document.querySelector('.nav');

pink.addEventListener('click', () => {
  circle.classList.remove('green');
  circle.classList.remove('red');
  circle.classList.add('pink');
});

green.addEventListener('click', () => {
  circle.classList.remove('red');
  circle.classList.remove('pink');
});

red.addEventListener('click', () => {
  circle.classList.remove('pink');
  circle.classList.remove('green');
  circle.classList.add('red');
});

menuBar.addEventListener('click', () => {
  nav.classList.toggle('openNav');
  if (menuBar.classList.contains('fa-bars')) {
    menuBar.classList.replace('fa-bars', 'fa-x');
  } else {
    menuBar.classList.replace('fa-x', 'fa-bars');
  }
});
