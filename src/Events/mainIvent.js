
import store from '../Store/store';
import { inputTypeEvent } from './FormEvant/inputTypeEvent';

export const mainEvents = () => {
  const dispatch = store.dispatch
  const state = store.getState
  const subscribe = store.subscribe


  inputTypeEvent(state, dispatch, subscribe)


}