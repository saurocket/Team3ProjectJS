import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

import { Main } from './Main/Main';

import { Footer } from './Footer/Footer';
import store from '../Store/store';



const root = document.getElementById('root');

export const App = () => {
  Header(root)
  Main(root, store.getState().events)
  Modal(root, false)
  Footer(root)

}

store.subscribe(()=> {
  const state = store.getState()

  if (state.events.isFetching == 2){
    Main(root, state.events)
  }
  Modal(root, state.mainForm.modal)


})

