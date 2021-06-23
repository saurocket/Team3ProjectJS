import { onChangeCountryCode, onInputEventActionCreator, onPageChanged } from '../../Store/formReducer';
import { getEvents } from '../../Store/eventsReducer';


export const inputTypeEvent = (state,dispatch,subscribe) => {
  const inputTitleRef = document.querySelector('#title')
  const inputCountryRef = document.querySelector('#country')

  inputTitleRef.addEventListener('input', (e) => {
    console.log(inputCountryRef.value)
      if(inputCountryRef.value === ''){
        dispatch(onChangeCountryCode(null))
        inputCountryRef.value = ''
      }
      dispatch(onInputEventActionCreator(e.currentTarget.value))
      dispatch(onPageChanged(1))
      inputTitleRef.value = state().mainForm.inputTitle
      dispatch(getEvents())


  })






}