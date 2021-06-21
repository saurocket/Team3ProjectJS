import store from '../store';

export const getModalInformation = (id) => {
  return (function(state) {
    return state.events.actualEvents.find(item => item.id === id)
  })(store.getState())

}