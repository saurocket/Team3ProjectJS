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

  const moreInfoRef = document.querySelector('.author-link')

 let elem = store.getState().events.modalInformation;

  if (elem){
    elem = elem._embedded.attractions.map(i => ` <li><h4>${i.name}</h4> <a href="${i.url}">By Tickets</a></li>`)
  }else{
    elem = ` <li><h4>San Francisco</h4> <a href="#">By Tickets</a></li>`
  }



  const moreInfoList = document.querySelector('.author-block_more')

  moreInfoList.insertAdjacentHTML('beforeend', elem)


  moreInfoRef.addEventListener('click', (e) => {
    e.preventDefault()
    if(moreInfoList.style.display === 'flex'){
      moreInfoList.style.display = 'none'
    }else{
      moreInfoList.style.display = 'flex'
    }
  })




}