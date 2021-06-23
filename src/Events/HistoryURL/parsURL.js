import { getQueryParam } from './getParamURL';
import store from '../../Store/store';
import {
  onInputCountry,
  onInputEventActionCreator,
  onModalChange,
  onPageChanged,
  onSelectEvent,
} from '../../Store/formReducer';
import { getEvents, getEventsFromURL, setModalInformation } from '../../Store/eventsReducer';


export const parseUrl = () => {
  const dispatch = store.dispatch;
  let keyword = getQueryParam('keyword') === 'null' ? null : getQueryParam('keyword'),
    countryCode = getQueryParam('countryCode') === 'null' ? null : getQueryParam('countryCode'),
    currentPage = Number(getQueryParam('currentPage')),
    modal = getQueryParam('modal') === 'true' ? true : false,
    id = getQueryParam('id') === 'null' ? null : getQueryParam('id'),
    inputCountry = getQueryParam('inputCountry') === 'null' ? null : getQueryParam('inputCountry')
      .replace(/%20/g, ' ');


  if (keyword || countryCode || id) {
    dispatch(onInputEventActionCreator(keyword));
    dispatch(onInputCountry(inputCountry));
    dispatch(onSelectEvent(countryCode));
    dispatch(onPageChanged(currentPage));
    dispatch(getEventsFromURL(id, modal));
  } else {
    dispatch(getEvents());
  }

};

