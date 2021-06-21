import { Card } from './card';
import store from '../../Store/store';
import { onModalChange } from '../../Store/formReducer';
import { setModalInformation } from '../../Store/eventsReducer';
import { getModalInformation } from '../../Store/selectors/getModalInformation';

export const FinallyCard = (root, state) => {
  const eventListRef = document.querySelector('.event-list')
  if (!eventListRef){
    return;
  }
  eventListRef.innerHTML = ''
  const arr =  state.map(item => {
    const id = item.id
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
    return Card(src,event, date, place, id)
  }).join('')
  eventListRef.insertAdjacentHTML('beforeend', arr)

  const eventCardRef = document.querySelectorAll('.event-card')
  eventCardRef.forEach(item => item.addEventListener('click', () => {
    const element = getModalInformation(item.id)
    store.dispatch(setModalInformation(element))
    store.dispatch(onModalChange(true))
  }))



  return
}