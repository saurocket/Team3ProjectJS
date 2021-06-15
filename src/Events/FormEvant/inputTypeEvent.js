import { onInputEventActionCreator } from '../../Store/formReducer';


export const inputTypeEvent = (state,dispatch,subscribe) => {
  const inputTitleRef = document.querySelector('#title')
  inputTitleRef.value = state().mainForm.inputTitle

  inputTitleRef.addEventListener('input', (e) => {
      dispatch(onInputEventActionCreator(e.currentTarget.value))
    inputTitleRef.value = state().mainForm.inputTitle


  })






}