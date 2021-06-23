import './sass/main.scss';
import { App } from './Components/App';
import { mainEvents } from './Events/mainIvent';
import { getEvents } from './Store/eventsReducer';
import store from './Store/store';
import { parseUrl } from './Events/HistoryURL/parsURL';

store.dispatch(getEvents())
App()
parseUrl()
mainEvents()

