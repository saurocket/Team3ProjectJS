export default function logicFoter() {
  const refs = {
    openModalBtn: document.querySelector('.footerModalOpen'),
    // closeModalBtn: document.querySelector('footerModalClose'),
    modal: document.querySelector('.footerModal'),
    main: document.querySelector('main'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', openModal);

  function openModal(e) {
    e.preventDefault();
    toggleModal(e);

    refs.body.addEventListener('keydown', closeModal);
    refs.modal.addEventListener('click', closeModal);
  }

  function closeModal(e) {
    if (
      e.target.className === 'footerModal' ||
      e.target.className === 'tList' ||
      e.key === 'Escape'
    ) {
      toggleModal();
      refs.body.removeEventListener('keydown', closeModal);
      refs.modal.removeEventListener('click', closeModal);
    }
  }
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modalFooter-open');
  }
}
