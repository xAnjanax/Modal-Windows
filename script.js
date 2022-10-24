'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay'); 
const btnCloseModal = document.querySelector('.close-modal'); 
const btnsOpenModal = document.querySelectorAll('.show-modal'); 
console.log(btnsOpenModal); 

const openModal = function () {
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden'); 
}

const closeModal = function () {
      //  console.log("Button Clicked")
        modal.classList.add('hidden'); 
        overlay.classList.add('hidden'); 
    } 

for (let i = 0; i < btnsOpenModal.length; i++) {
(btnsOpenModal[i].addEventListener('click', openModal)) }

btnCloseModal.addEventListener('click', closeModal); 

// key press events // 

document.addEventListener('keydown', function(lol) {
    console.log(lol.key); 
    if (lol.key === 'Escape') { // if the presses key was Escape 
    // console.log("Escape was pressed!");
        if (!modal.classList.contains('hidden')) { // and if the modal does not contain the hidden class 
            closeModal(); // then execute this function to close the modal 
        }
      }
    }); 

// can be rewritten as 
// if (lol.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); 

