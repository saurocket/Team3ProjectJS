import store from '../store';


export const getCountryData  = () => {
  return (function(state) {
    return state.mainForm.countryData
  })(store.getState())
}