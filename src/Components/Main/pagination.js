import { FinallyCard } from './FinallyCard';

export const notesOnPage = 2;

export const Pagination = (root, actualEvents) => {
  const numberOfEvent = actualEvents.length;
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
  let pagesRef = document.querySelectorAll('.page-item');

  pagesRef.forEach(item =>
    item.addEventListener('click', e => {
      const target = e.target;
      if (!target.classList.contains === 'page-item') return;
      pagesRef.forEach(page => page.classList.remove('active'));
      item.classList.add('active');
      const value = parseInt(item.textContent);
      const start = (value - 1) * notesOnPage;
      const end = start + notesOnPage;
      newEvents = actualEvents.slice(start, end);
      FinallyCard(root, newEvents);
    }),
  );
};
