import Pagination from 'tui-pagination';
import { FinallyCard } from './FinallyCard';
import { getAllCountPages } from '../../Store/selectors/getAllCountPages';
import { api } from '../../API/api'
/* export const notesOnPage = 20;

export const Pagination = (root, actualEvents) => {
  const numberOfEvent = getAllCountPages();
  const pages = new Array(Math.ceil(numberOfEvent / notesOnPage)).fill('');
  const pagesElement = pages.map((item, index) => {
      return `<li class="page-item ${index === 0 && 'active'}"><a class="page-link" href="#">${
        index + 1
      }</a></li>`;
    })
        .join('');

  const elements = `
        <div class="pag-container">
            <ul class="pag" id="pagination">
            <li class="arrow laquo"><a href="#">&laquo;</a></li>
            ${pagesElement}
            <li class="arrow raquo"><a href="#">&raquo;</a></li>
            </ul>
        </div>`;
    root.insertAdjacentHTML('beforeend', elements);
  let newEvents = actualEvents.slice(0, notesOnPage);
  FinallyCard(root, newEvents);
  
};

`<< [1234]...[5678] >>` */
export const startPagination = (root) => {
  

  const elements = `
       <div id="pagination" class="tui-pagination"></div>`
  root.insertAdjacentHTML('beforeend', elements);
  const options = {
    totalItems: getAllCountPages(),
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);
  /* pagination.on('beforeMove', evt => {
    const { page } = evt;
    const result = api.xhr.send({ page });

    if (result) {
      pagination.movePageTo(page);
    } else {
      return false;
    }
  }); */

  pagination.on('afterMove', ({ page }) => console.log(page));
}

