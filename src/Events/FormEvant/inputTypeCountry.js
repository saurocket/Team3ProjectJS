import { onInputCountry } from '../../Store/formReducer';
import { getCountryData } from '../../Store/selectors/getCountryData';
import { filtredCountryData } from '../../Store/selectors/filtredCountryData';


export const inputTypeCountry = (state,dispatch) => {
  const inputCountryRef = document.querySelector('#country')
  inputCountryRef.value = state().mainForm.inputCountry

  inputCountryRef.addEventListener('input', (e) => {
    dispatch(onInputCountry(e.currentTarget.value))
    inputCountryRef.value = state().mainForm.inputCountry



    if(getCountryData().length > state().mainForm.filtredCountryData.length && state().mainForm.filtredCountryData.length !==0){
      const country = state().mainForm.filtredCountryData;
      console.log(country)
    } 
  })
}