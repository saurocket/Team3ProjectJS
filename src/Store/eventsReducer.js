import store from './store';
import { api } from '../API/api';
import { getModalInformation } from './selectors/getModalInformation';
import { onModalChange } from './formReducer';

const GET_EVENTS_FROM_API = 'ET_EVENTS_FROM_API'
const GET_PAGE_INFORM_API = 'GET_PAGE_INFORM_API'
const IS_FETCHING = 'IS_FETCHING'
const RESET_REQUEST = 'RESET_REQUEST'
const FOUND_EVENTS = 'FINDE_EVENTS'
const SET_MODAL_INFORMATION = 'SET_MODAL_INFORMATION'
const IS_INITIALIZED = 'IS_INITIALIZED'

const initialState = {
  modalInformation: null,
  actualEvents: null,
  pageInformation: null,
  isFound: null,
  isFetching: 0,
  isInitialized: false,
}


export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_FROM_API:
      return { ...state, actualEvents: [...action.payload] }
    case GET_PAGE_INFORM_API:
      return { ...state, pageInformation: { ...action.payload } }
    case RESET_REQUEST: {
      return {...state, actualEvents: null, pageInformation: null}
    }
    case IS_FETCHING:{
      return {...state, isFetching: action.isFetching }
    }
    case FOUND_EVENTS: {
      return {...state, isFound: action.isFound}
    }
    case SET_MODAL_INFORMATION: {
      if (action.payload === null){
        return {...state, modalInformation: null}
      }else{
        return {...state, modalInformation: {...action.payload}}
      }
    }
    case IS_INITIALIZED: {
      return {...state, isInitialized: action.value}
    }
    default: return state
  }
}

const setEvents = (payload) => {
  return { type: GET_EVENTS_FROM_API, payload };
};
const setPageInformation = (payload) => {
  return { type: GET_PAGE_INFORM_API, payload };
};
const isFetching = (isFetching) => {
  return {
    type: IS_FETCHING, isFetching
  }
}
const resetRequest = () => {
  return {
    type: RESET_REQUEST
  }
}
const isFoundEvents = (isFound) => {
  return {
    type: FOUND_EVENTS, isFound
  }
}
export const setModalInformation = (payload) => {
  return {
    type: SET_MODAL_INFORMATION, payload
  }
}

export const updateInitialized = (value) => {
  return {
    type: IS_INITIALIZED, value
  }
}



export const getEvents = () => {
  const { inputTitle, countryCode, pageSize, currentPage } = store.getState().mainForm;
  return (
    async (dispatch) => {
      dispatch( isFetching(1))
      const response = await api(inputTitle, countryCode, pageSize, currentPage)
        try {
          const events = response._embedded.events;
          const page = response.page;
          dispatch(setEvents(events));
          dispatch(setPageInformation(page));
          dispatch(isFoundEvents(true))
          dispatch(updateInitialized(true))
          dispatch( isFetching(2))
          dispatch( isFetching(0))

        }catch (e) {
          dispatch(resetRequest())
          dispatch(isFoundEvents(false))
          dispatch( isFetching(2))
          dispatch( isFetching(0))
        }
    }
  );
};



export const getEventsFromURL = (id, modal) => {
  const { inputTitle, countryCode, pageSize, currentPage } = store.getState().mainForm;
  return (
    async (dispatch) => {
      dispatch( isFetching(1))
      const response = await api(inputTitle, countryCode, pageSize, currentPage)
      try {
        const events = response._embedded.events;
        const page = response.page;
        dispatch(setEvents(events));
        dispatch(setPageInformation(page));
        dispatch(isFoundEvents(true))
        if (id){
          dispatch(setModalInformation(getModalInformation(id)))
          dispatch(onModalChange(modal))
        }
        dispatch(updateInitialized(true))
        dispatch( isFetching(2))
        dispatch( isFetching(0))
      }catch (e) {
        dispatch(resetRequest())
        dispatch(isFoundEvents(false))
        dispatch( isFetching(2))
        dispatch( isFetching(0))
      }
    }
  );
};

`
const element = getModalInformation(item.id)
    store.dispatch(setModalInformation(element))
`