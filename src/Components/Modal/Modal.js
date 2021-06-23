import codePic from '../../images/modal/ticket1.svg';
import closePic from '../../images/modal/symbol-defs.svg';
import { modalEvent } from './modal-functional';
import store from '../../Store/store';

export const Modal = (root, modalFlag) => {
  if (!modalFlag){
    const backdropeRef = document.querySelectorAll('.backdrop')
    if (backdropeRef[0]){
      backdropeRef.forEach(item => item.remove())
      return
    }
  return;
  }

  const state = store.getState().events.modalInformation




  let srcImg = 'https://abnews.ru/wp-content/uploads/2016/04/black-eyed-peas.jpg';
  let alt = 'alt text';
  const elements =`
    <div class="backdrop" data-modal>
      <div class="modal-container">
        <button type="button" class="btn-close btn-modal-close" data-modal-close>
          <svg class="btn-close-icon">
            <use href="${closePic}#icon-close"></use>
          </svg>
        </button>
        <div class="icon-block">
          <img src="${state.images[4].url}" alt="${alt}" class="event-icon" />
        </div>
        <div class="modal-body">
          <div class="modal-photo-block">
            <img src="${state.images[8].url}" alt="main picture" class="modal-photo" />
          </div>
          <div class="modal-main-info">
            <h2 class="modal-title">Info</h2>
            <p class="modal-text">
              ${state.name}
            </p>
            <h2 class="modal-title">When</h2>
            <p class="modal-text">
              <time>${state.dates.start.localDate}</time>
              <br />
              <time>${state.dates.start.localTime}</time>
              <span>(${state.dates.timezone})</span>
            </p>
            <h2 class="modal-title">Where</h2>
            <p class="modal-text">
              Kyiv, Ukraine <br />
              VDNH
            </p>
            <h2 class="modal-title">Who</h2>
            <p class="modal-text">The Black Eyed Peas</p>
            <h2 class="modal-title">Prices</h2>
            <div class="price-block">
              <div class="price-info">
                <img src="${codePic}" alt="ticket_code" class="price-code" />
                <div class="price-text">
                  <span class="prcie-type">Standart</span>
                  <span class="price-value-min">300</span>
                  -
                  <span class="price-value-min">500</span>
                  <span class="price-currency">UAH</span>
                </div>
              </div>
              <a href="" class="buy-ticked-link">BUY TICKETS</a>
            </div>
            <div class="price-block">
              <div class="price-info">
                <img src="${codePic}" alt="ticket_code" class="price-code" />
                <div class="price-text">
                  <span class="prcie-type">VIP</span>
                  <span class="price-value-min">500</span>
                  -
                  <span class="price-value-min">1000</span>
                  <span class="price-currency">UAH</span>
                </div>
              </div>
              <a href="" class="buy-ticked-link">BUY TICKETS</a>
            </div>
          </div>
        </div>
        <div class="author-block">
          <a href="https://en.wikipedia.org/wiki/Main_Page" target="blank" class="author-link"
            >MORE FROM THIS AUTHOR</a
          >
        </div>
        <div class="modal-arrow_block">
          <button class="prev-next-btn" id="p">«</button>
          <button class="prev-next-btn" id="n">»</button>
        </div>
      </div>
    </div>
    `;

  root.insertAdjacentHTML('afterbegin', elements);


  modalEvent()



};
// import modalOpen from '../Modal/modal-functional';




// (() => {
//       const refs = {
//         openModalBtn: document.querySelector('[data-modal-open]'),
//         closeModalBtn: document.querySelector('[data-modal-close]'),
//         modal: document.querySelector('[data-modal]'),
//       };

//       refs.openModalBtn.addEventListener('click', toggleModal);
//       refs.closeModalBtn.addEventListener('click', toggleModal);

//       function toggleModal() {
//         document.body.classList.toggle('modal-open');
//         refs.modal.classList.toggle('is-hidden');
//       }
//     })();


