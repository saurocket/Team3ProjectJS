import logMob from "../../images/header-img/logo-mobile.png"
import logTab from "../../images/header-img/logo-tablet.png"
import logDesc from "../../images/header-img/logo-dekstop.png"
import logIcon from "../../images/header-img/symbol-defs.svg"
import { valueInput } from "./value"
import { SelectList } from './Select';

export const Header = (root) => {
  const elements =`<header>

             <div class="header-container">
      <picture class="header-img">
                    <source srcset="${logMob}" media="(max-width:767px") />
                    <source srcset="${logTab}" media="(max-width:1280px") />
                    <source srcset="${logDesc}" media="(min-width:1280px") />
                    <img src="${logDesc}" alt="Логотип">
                </picture>
                <h1 class="header-name">FIND BEST EVENTS <br>
             AROUND THE WORLD</h1>

      <ul class="header-input">
      <li class="header-start"><input id="title" type="text" name="text" placeholder="Start searching">
      <svg width="12px" height="12px"><use href="${logIcon}#icon-vector"></use></svg></li>

      <li class="header-country">
      <input id="country" type="text" name="text" placeholder="Choose country">
      <svg width="12px" height="12px"><use href="${logIcon}#icon-polygon"></use></svg>
       ${SelectList(root)}
       </li>
      </ul>

      </div>
    </header>`;


  root.insertAdjacentHTML('afterbegin', elements);


};

// <ul>
      // <li>${valueInput}</li></ul>
