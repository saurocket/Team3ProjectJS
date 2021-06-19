export default function logicFoter() {
  const refs = {
    openModalBtn: document.querySelector('.footerModalOpen'),
    // closeModalBtn: document.querySelector('footerModalClose'),
    modal: document.querySelector('.footerModal'),
    main: document.querySelector('main'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', e => {
    if (e.target.className === 'footerModal' || e.target.className === 'tList') {
      toggleModal(e);
    }
  });
  refs.body.addEventListener('keydown', e => {
    console.log(e);
    if (e.key === 'Escape') {
      refs.modal.classList.toggle('is-hidden');
    }
  });

  function toggleModal(event) {
    event.preventDefault();
    // document.body.classList.toggle('modal-open');
    refs.body.classList.toggle('modalFooter-open');

    refs.modal.classList.toggle('is-hidden');
  }
}
