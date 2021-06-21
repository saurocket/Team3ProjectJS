import store from '../store';

export const getCurrentPage = () => {
  return (function(state) {
    return state.mainForm.currentPage
  })(store.getState())
}

