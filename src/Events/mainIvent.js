
import store from '../Store/store';
import { inputTypeEvent } from './FormEvant/inputTypeEvent';
import { onChangeSelect } from './FormEvant/onChengeSelectorCountry';
import { inputTypeCountry } from './FormEvant/inputTypeCountry';

export const mainEvents = () => {
  const dispatch = store.dispatch
  const state = store.getState
  const subscribe = store.subscribe


  inputTypeEvent(state, dispatch, subscribe)
  inputTypeCountry(state, dispatch)
  // onChangeSelect(state,dispatch)

}