import { Card } from './card';


export const Main = (root) => {
  const arr = new Array(20).fill('').map(item => Card()).join('')
  const elements =`<main>
        <div class="container gallery">
            <ul class="event-list">
                ${arr}
            </ul>
        </div>
    </main>`;


  root.insertAdjacentHTML('beforeend', elements);


};