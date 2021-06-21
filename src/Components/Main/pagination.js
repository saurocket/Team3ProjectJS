import Pagination from 'tui-pagination';
import { getAllCountPages } from '../../Store/selectors/getAllCountPages';
import { onPageChanged } from '../../Store/formReducer';
import store from '../../Store/store';
import { getEvents } from '../../Store/eventsReducer';
import { getCurrentPage } from '../../Store/selectors/getCurrentPage';
export const startPagination = (root, currentPage, totalPages) => {

  console.log('total pages --- ' + totalPages)
  if (totalPages<=12){
    return
  }
  const paginationRef = document.querySelector('#pagination');
  if(paginationRef){
    paginationRef.style.display = 'block'
    return;
  }

  const elements = `
       <div id="pagination" class="tui-pagination"></div>`
  root.insertAdjacentHTML('beforeend', elements);
  const options = {
    totalItems: totalPages,
    itemsPerPage: 20,
    visiblePages: 5,
    page: currentPage,
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

  pagination.on('afterMove', ({ page }) => {
    store.dispatch(onPageChanged(page))
    store.dispatch(getEvents())
  });
}

