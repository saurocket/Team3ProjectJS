import codePic from '../../images/modal/ticket1.svg';
import closePic from '../../images/modal/symbol-defs.svg';
export const Modal = (root) => {
  let srcImg = 'https://abnews.ru/wp-content/uploads/2016/04/black-eyed-peas.jpg';  
  let alt = 'alt text';
  const elements =`
    <div class="modal-container">
     <button type="button" class='btn-close' data-modal-close>
      <svg class="btn-close-icon">
        <use href='${closePic}#icon-close'></use>
      </svg>
    </button>
    <img src='${srcImg}' alt="${alt}" class="event-icon" />
    <h2>Info</h2>
    <p>Atlas Weekend is the largest music festival in Ukraine. More than 200 artists will create a proper music festival atmosphere on 10 stages</p>
    <h2>When</h2>
    <p>
      <time>2021-06-09</time>
    </p>
    <p>
      <time>20:00</time>
      <span>(Kyiv/Ukraine)</span>
    </p>
    <h2>Where</h2>
    <p>
      Kyiv, Ukraine <br/>
      VDNH
    </p>
    <h2>Who</h2>
    <p>
      The Black Eyed Peas
    </p>
    <h2>Prices</h2>
    <div class='price-block'>
      <img src='${codePic}' alt="ticket_code" class="price-code" />
        <span class='prcie-type'>Standart</span>
        <span class='price-value-min'>300</span>
        -
        <span class='price-value-min'>500</span>
        <span class='price-currency'>UAH</span>
      <a href="" class='buy-ticked-link'>BUY TICKETS</a>
    </div>

    <div class='price-block'>
      <img src='${codePic}' alt="ticket_code" class='price-code'>
        <span class='prcie-type'>VIP</span>
        <span class='price-value-min'>1000</span>
        -
        <span class='price-value-max'>1500</span>
        <span class='price-currency'>UAH</span>
      <a href="" class='buy-ticked-link'>BUY TICKETS</a>
    </div>
    <a href="https://en.wikipedia.org/wiki/Main_Page" class='buy-ticked-link'>MORE FROM THIS AUTHOR</a>







    </div>`;

  root.insertAdjacentHTML('afterbegin', elements);


};