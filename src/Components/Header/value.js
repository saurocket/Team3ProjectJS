import { getCountryCode } from '../../Store/selectors/modalSelecors';


export const valueInput = getCountryCode().map(i => `<li class="select-item" data-type="i" data-id="${i.countryCode}">${i.name}</li>`).join("");
const elemBtn = document.querySelector( 'selector')
 clickOn = elemBtn.classList.add('open')
// elemBtn.addEventListener( 'click', clickOn =>{
//     elemBtn.classList.add('')
// })