import { setLocation } from './pushURL';

export const updateURL = (state) => {

  const id = state.events.modalInformation === null ? null : state.events.modalInformation.id



    setLocation(`?keyword=${state.mainForm.inputTitle}&countryCode=${state.mainForm.countryCode}&currentPage=${
      state.mainForm.currentPage}&inputCountry=${state.mainForm.inputCountry}&modal=${state.mainForm.modal}&id=${id}`)




}
