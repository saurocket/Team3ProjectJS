import codePic from '../../images/modal/ticket1.svg';
import closePic from '../../images/modal/symbol-defs.svg';
import mainPic from '../../images/modal/pic.png';

export const Modal = (root, modalFlag) => {
  if (!modalFlag) return;
  let srcImg = 'https://abnews.ru/wp-content/uploads/2016/04/black-eyed-peas.jpg';  
  let alt = 'alt text';
  const elements =`
    <div class="backdrop" data-modal>
      <div class="modal-container">
        <div class="icon-block">
          <img src="${srcImg}" alt="${alt}" class="event-icon" />
        </div>
        <div class="modal-body">
          <div class="modal-photo-block">
            <img src="${mainPic}" alt="main picture" class="modal-photo" />
          </div>
          <div class="modal-main-info">
            <button type="button" class="btn-close" data-modal-close>
              <svg class="btn-close-icon">
                <use href="${closePic}#icon-close"></use>
              </svg>
            </button>
            <h2 class="modal-title">Info</h2>
            <p class="modal-text">
              Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will
              create a proper music festival atmosphere on 10 stages
            </p>
            <h2 class="modal-title">When</h2>
            <p class="modal-text">
              <time>2021-06-09</time>
              <br />
              <time>20:00</time>
              <span>(Kyiv/Ukraine)</span>
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
      </div>
    </div>
    `;

  root.insertAdjacentHTML('afterbegin', elements);


};


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