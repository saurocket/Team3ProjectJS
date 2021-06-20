import store from '../store';


export const getAllCountPages  = () => {
  return (function(state) {
    return state.events.pageInformation.totalPages
  })(store.getState())
}