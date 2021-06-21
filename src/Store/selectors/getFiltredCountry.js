import store from '../store';


export const getFiltredCountry  = () => {
  return (function(state) {
    return state.mainForm.filtredCountryData
  })(store.getState())
}