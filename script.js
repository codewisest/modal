'use strict';
// get modal, overlay, close-modal, show-modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

// toggle modal
function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

// attach event handler to buttons
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', toggleModal);
}

closeModal.addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
