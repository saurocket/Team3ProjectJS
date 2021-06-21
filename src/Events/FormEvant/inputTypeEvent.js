import { onChangeCountryCode, onInputEventActionCreator, onPageChanged } from '../../Store/formReducer';
import { getEvents } from '../../Store/eventsReducer';


export const inputTypeEvent = (state,dispatch,subscribe) => {
  const inputTitleRef = document.querySelector('#title')
  const inputCountryRef = document.querySelector('#country')
  inputTitleRef.value = state().mainForm.inputTitle

  inputTitleRef.addEventListener('input', (e) => {
      if(inputCountryRef.textContent === '' || inputCountryRef.textContent === null){
        dispatch(onChangeCountryCode(null))
      }
      dispatch(onInputEventActionCreator(e.currentTarget.value))
      dispatch(onPageChanged(1))
      inputTitleRef.value = state().mainForm.inputTitle
      dispatch(getEvents())


  })






}