'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  // not use .hidden because '.' is when select class
  // * adding class
  //*  removing class
  //*  check class is present or not
  overlay.classList.remove('hidden');
  // modal.style.display='block';//<<<<<<<<<<<<<<<<<<<
};

//Multiple button listener
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal); //<<<<<<<<<<<
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
//  we not write closeModal() function javascript run.
overlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function (e) {
  // console.log(e);
  // console.log(e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
