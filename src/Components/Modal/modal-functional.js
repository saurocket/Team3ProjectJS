const modalBackdrop = document.querySelector('.backdrop');
const btnModalClose = document.querySelector('.btn-modal-close');
// const modalPrev = document.getElementById('p');
// const modalNext = document.getElementById('n');


window.addEventListener('keydown', onEscCloseModal)
console.log(modalBackdrop);
console.log(btnModalClose);
modalBackdrop.addEventListener('click', onBdpClick);
btnModalClose.addEventListener('click', closeModal);

function closeModal() {    
    const isClosed = refs.modalBackdrop.classList.contains('is-hidden')
    if (isClosed) {
        return
    }
    modalBackdrop.classList.add('is-hidden')
}

function onBdpClick(e) {
    if (e.target.classList.contains('modal-container') || e.target.classList.contains('backdrop')) {
        closeModal();
    }    
}

function onEscCloseModal(e) {    
    if (e.code === 'Escape') {
        closeModal();
    }
}