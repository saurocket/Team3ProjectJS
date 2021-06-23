import store from '../../Store/store';
import { onModalChange } from '../../Store/formReducer';
import { setModalInformation } from '../../Store/eventsReducer';

export const modalEvent = () => {
  const modalBackdrop = document.querySelector('.backdrop');
  const btnModalClose = document.querySelector('.btn-modal-close');
// const modalPrev = document.getElementById('p');
// const modalNext = document.getElementById('n');


  window.addEventListener('keydown', onEscCloseModal)
  modalBackdrop.addEventListener('click', onBdpClick);
  btnModalClose.addEventListener('click', closeModal);

  function closeModal() {

    store.dispatch(onModalChange(false))
    store.dispatch(setModalInformation(null))


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
}