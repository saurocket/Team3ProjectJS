
export const updateUiComponent = (state) => {
  const inputTitleRef = document.querySelector('#title')
  const inputCountryRef = document.querySelector('#country')

  if(inputCountryRef){
    inputTitleRef.value = state().mainForm.inputTitle

  }
  if(inputCountryRef){
    inputCountryRef.value = state().mainForm.inputCountry
  }
}