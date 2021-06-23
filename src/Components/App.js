import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

import { Main } from './Main/Main';

import { Footer } from './Footer/Footer';
import store from '../Store/store';
import { updateURL } from '../Events/HistoryURL/updateURL';



const root = document.getElementById('root');

export const App = () => {
  Header(root)
  Main(root, store.getState().events)
  Modal(root, false)
  Footer(root)

}

store.subscribe(()=> {
  const state = store.getState()
  if (state.events.isInitialized){
    updateURL(state)
  }


  if(state.events.isFetching == 1){

    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }


  if (state.events.isFetching == 2){
    Main(root, state.events)
    document.body.classList.add('loaded_hiding');
  }
  Modal(root, state.mainForm.modal)


})

