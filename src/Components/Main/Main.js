import { Card } from './card';

export const Main = (root, state) => {

  if(state === null){
    const eventListRef = document.querySelector('.event-list')
    if (!eventListRef){
      return;
    }
    eventListRef.innerHTML = ''
    const textAlert = `<p>Sorry but i can not help :)</p>`
    eventListRef.insertAdjacentHTML('beforeend', textAlert)
    return
  }

  let arr = null
  if(state === undefined){
  arr = new Array(20).fill('').map(item => Card()).join('')
    const elements =`<main>
        <div class="container">
            <ul class="event-list">
                ${arr}
            </ul>
        </div>
    </main>`;
    root.insertAdjacentHTML('beforeend', elements);
    return
  }else{
    const eventListRef = document.querySelector('.event-list')
    if (!eventListRef){
      return;
    }
    eventListRef.innerHTML = ''
    arr =  state.map(item => {

      const src = item.images[7].url
      const event = item.name
      const date = item.dates.start.localDate
      const place = item._embedded.venues[0].name

      return Card(src,event, date, place)
    }).join('')
    eventListRef.insertAdjacentHTML('beforeend', arr)
    return
  }

};