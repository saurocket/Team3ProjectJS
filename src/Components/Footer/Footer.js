import logicFoter from './logicFoter';
import logoGit from '../../images/footer/GitHub-Mark/PNG/GitHub-Mark-32px.png';
export const Footer = root => {
  let team = '';
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://script.google.com/macros/s/AKfycbwXwNLpwzqL_opQxmmeKZ26Iow4AVoTVkVV26JFMkhDGTZR7JDr/exec',
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status == 200) {
      try {
        team = JSON.parse(xhr.responseText)
          .result.map((person, idx) => {
            if (idx > 0) {
              return `
              <li class="tCard">

              <img class="cardFront" src="${person[5]}" alt="${person[1]}&nbsp${person[0]}">

              <div class="cardRear">
              <p>${person[1]} ${person[0]}</p>
              <p>${person[4]}</p>
              <a href="${person[3]}" class="link"><img class="logoGit" src="${logoGit}" alt="github"></a>
              </div>
              </li>`;
            }
          })
          .join('');
        console.log(JSON.parse(xhr.responseText));
        const elements = `<footer><p>© 2021 | All Rights Reserved | Developed with <img class="heart" src=https://phoneky.co.uk/thumbs/screensavers/down/misc/heart-beat_bes6xpl1.gif> by&nbsp; <a class="footerModalOpen" href=""> GoIT Students</a></p><div class="is-hidden footerModal"><h3 class="footerHeadline">Над проектом работали:</h3><ul class="tList">${team}</ul></div></footer>`;
        root.insertAdjacentHTML('beforeend', elements);
        logicFoter();
      } catch (e) {
        console.log(e);
      }
    }
  };
  xhr.send();
};
