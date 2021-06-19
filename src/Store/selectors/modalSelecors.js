import store from '../store';


export const getCountryCode = () => {
  return (function(state) {
    return state.mainForm.countryData
  })(store.getState())
}