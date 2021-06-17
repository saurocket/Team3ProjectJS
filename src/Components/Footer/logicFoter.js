export default function logicFoter() {
  const refs = {
    openModalBtn: document.querySelector('.footerModalOpen'),
    // closeModalBtn: document.querySelector('footerModalClose'),
    modal: document.querySelector('.footerModal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', e => {
    if (e.target.className === 'footerModal') {
      toggleModal(e);
    }
  });
  refs.modal.addEventListener('keydown', e => {
    console.log(e);
    if (e.key === 'Escape') {
      toggleModal();
    }
  });

  function toggleModal(event) {
    event.preventDefault();

    // document.body.classList.toggle('modal-open');

    refs.modal.classList.toggle('is-hidden');
  }
}
