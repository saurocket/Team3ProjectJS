import { onSelectEvent } from '../../Store/formReducer';
import { getEvents } from '../../Store/eventsReducer';

export const onChangeSelect = (state, dispatch) => {
  const selectorRef = document.querySelector('#country')

  selectorRef.addEventListener('change', (e) => {
    dispatch(onSelectEvent(e.target.value))
    selectorRef.value = state().mainForm.countryCode
    dispatch(getEvents())
  })

}