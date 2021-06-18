import store from './store';
import { api } from '../API/api';

const GET_EVENTS_FROM_API = 'ET_EVENTS_FROM_API';
const GET_PAGE_INFORM_API = 'GET_PAGE_INFORM_API';
const IS_FETCHING = 'IS_FETCHING'
const RESET_REQUEST = 'RESET_REQUEST'

const initialState = {
  actualEvents: null,
  pageInformation: null,
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


export const getEvents = () => {
  const { inputTitle, countryCode, pageSize, currentPage } = store.getState().mainForm;
  return (
    async (dispatch) => {
      dispatch( isFetching(1))
      const response = await api(inputTitle, countryCode, pageSize, currentPage)

      if (response.page.totalElements === 0){
        dispatch(resetRequest())
        dispatch( isFetching(2))
        dispatch( isFetching(0))
      }else{
        console.log(response)
        const events = response._embedded.events;
        const page = response.page;
        dispatch(setEvents(events));
        dispatch(setPageInformation(page));
        dispatch( isFetching(2))
        dispatch( isFetching(0))
      }
    }
  );
};