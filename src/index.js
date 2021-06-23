import './sass/main.scss';
import { App } from './Components/App';
import { mainEvents } from './Events/mainIvent';
import { getEvents } from './Store/eventsReducer';
import store from './Store/store';
import { parseUrl } from './Events/HistoryURL/parsURL';
import './Components/Main/preloader';


App()
parseUrl()
mainEvents()

