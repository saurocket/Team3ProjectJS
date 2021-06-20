import {onInputEventActionCreator } from '../../Store/formReducer';
import { getEvents } from '../../Store/eventsReducer';


export const inputTypeEvent = (state,dispatch,subscribe) => {
  const inputTitleRef = document.querySelector('#title')
  inputTitleRef.value = state().mainForm.inputTitle

  inputTitleRef.addEventListener('input', (e) => {
      dispatch(onInputEventActionCreator(e.currentTarget.value))
      inputTitleRef.value = state().mainForm.inputTitle
      dispatch(getEvents())


  })






}