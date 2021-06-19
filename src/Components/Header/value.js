import { Select } from "../../country-data";


export const valueInput = Select.map(i => `<option value="${i.countryCode}">"${i.name}"</option>`).join("");