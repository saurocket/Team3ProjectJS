import { getCountryCode } from '../../Store/selectors/modalSelecors';


export const valueInput = getCountryCode().map(i => `<li id="${i.countryCode}"> ${i.name}</li>`).join("");
