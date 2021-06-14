import { Header } from './Header/Header';
import { Modal } from './Modal/Modal';

import { Main } from './Main/Main';

import { Footer } from './Footer/Footer';


const root = document.getElementById('root');

export const App = () => {
  Header(root)
  // второй параментр при true модалка есть, при false модалки нет

  Main(root)
  Modal(root, false)
  Footer(root)

}



