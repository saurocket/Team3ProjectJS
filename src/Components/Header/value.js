import { getCountryCode } from '../../Store/selectors/modalSelecors';


export const valueInput = getCountryCode().map(i => `<option value="${i.countryCode}">${i.name}</option>`).join("");