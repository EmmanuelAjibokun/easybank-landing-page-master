const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => { // close hamburger menu
  if(header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noScroll')
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
  } else { // open hamburger menu
    header.classList.add('open');
    body.classList.add('noScroll')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
  }
})