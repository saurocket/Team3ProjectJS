import { onInputCountry } from '../../Store/formReducer';
import { getCountryData } from '../../Store/selectors/getCountryData';


export const inputTypeCountry = (state,dispatch) => {
  const inputCountryRef = document.querySelector('#country')
  inputCountryRef.value = state().mainForm.inputCountry

  inputCountryRef.addEventListener('input', (e) => {
    dispatch(onInputCountry(e.currentTarget.value))
    inputCountryRef.value = state().mainForm.inputCountry



    if(getCountryData().length > state().mainForm.filtredCountryData.length && state().mainForm.filtredCountryData.length !==0){
      console.log('тут пишешь логику для открытия фильтра')

    }

  })
}