import { onChangeCountryCode, onInputCountry } from '../../Store/formReducer';
import { getCountryData } from '../../Store/selectors/getCountryData';
import { valueInput } from '../../Components/Header/value';
import { getFiltredCountry } from '../../Store/selectors/getFiltredCountry';
import { getEvents } from '../../Store/eventsReducer';


export const inputTypeCountry = (state,dispatch) => {
  const inputCountryRef = document.querySelector('#country')
  inputCountryRef.value = state().mainForm.inputCountry

  inputCountryRef.addEventListener('input', (e) => {
    dispatch(onInputCountry(e.currentTarget.value))
    inputCountryRef.value = state().mainForm.inputCountry
    if(getFiltredCountry().length === 0 || getCountryData().length === getFiltredCountry().length  ){
      const selectRef = document.querySelector('#selectedList')
      if(selectRef){
        selectRef.innerHTML = ''
      }
    }
    if(getCountryData().length > getFiltredCountry().length && getFiltredCountry().length !==0){
      const country = state().mainForm.filtredCountryData;
      const selectRef = document.querySelector('#selectedList')
      if(selectRef){
        selectRef.innerHTML = ''
        selectRef.insertAdjacentHTML('afterbegin', valueInput(country))
        const countryRef = document.querySelectorAll('#selectedList>li').forEach(item => {
          item.addEventListener('click', () => {
            dispatch(onInputCountry(item.textContent))
            dispatch(onChangeCountryCode(item.id))
            const inputCountryRef = document.querySelector('#country')
            inputCountryRef.value = state().mainForm.inputCountry
            selectRef.innerHTML = ''
            dispatch(getEvents())
          })
        })

      }
    }
  })
}