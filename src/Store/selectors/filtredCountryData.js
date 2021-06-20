import store from '../store';


export const filtredCountryData  = () => {
  return (function(state) {
    return state().mainForm.filtredCountryData
  })(store.getState())
}