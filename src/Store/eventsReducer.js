import store from './store';
import { api } from '../API/api';

const GET_EVENTS_FROM_API = 'ET_EVENTS_FROM_API'
const GET_PAGE_INFORM_API = 'GET_PAGE_INFORM_API'
const IS_FETCHING = 'IS_FETCHING'
const RESET_REQUEST = 'RESET_REQUEST'
const FOUND_EVENTS = 'FINDE_EVENTS'

const initialState = {
  actualEvents: null,
  pageInformation: null,
  isFound: null,
  isFetching: 0,
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