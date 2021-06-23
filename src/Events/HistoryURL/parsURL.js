import { getQueryParam } from './getParamURL';
import store from '../../Store/store';
import { onInputEventActionCreator, onModalChange, onPageChanged, onSelectEvent } from '../../Store/formReducer';
import { getEvents, setModalInformation } from '../../Store/eventsReducer';


export const parseUrl = () => {
  const dispatch = store.dispatch;

  let keyword = getQueryParam('keyword'),
    countryCode = getQueryParam('countryCode'),
    currentPage = +getQueryParam('currentPage'),
    modal = getQueryParam('modal') === 'true' ? true : false,
    id = getQueryParam('id');

  // if (keyword) {
  //   debugger
  //   dispatch(onInputEventActionCreator(keyword));
  //   dispatch(onSelectEvent(countryCode));
  //   dispatch(onPageChanged(currentPage));
  //   dispatch(getEvents());
  // }


  // const element = store.getState().events.actualEvents.find(item => item.id === id);
  // dispatch(onModalChange(modal));
  // dispatch(setModalInformation(element));

};

