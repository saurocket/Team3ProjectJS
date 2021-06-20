import { Card } from './card';

export const FinallyCard = (root, state) => {
  const eventListRef = document.querySelector('.event-list')
  if (!eventListRef){
    return;
  }
  eventListRef.innerHTML = ''
  const arr =  state.map(item => {

    const src = item.images[7].url
    const event = item.name
    const date = item.dates.start.localDate
    let place = 'something place'
    try {
      place = item._embedded.venues[0].name
    }catch (e) {

    }
    try {
      place = item._embedded.venues.address.line1
    }catch (e) {

    }
    return Card(src,event, date, place)
  }).join('')
  eventListRef.insertAdjacentHTML('beforeend', arr)
  return
}