import { Card } from './card';

export const PreloaderCard = (root) => {

 const arr = new Array(20).fill('').map(item => Card()).join('')
  const elements =`<main>
        <div class="container">
            <ul class="event-list">
                ${arr}
            </ul>
        </div>
    </main>`;
  root.insertAdjacentHTML('beforeend', elements);
  return
}