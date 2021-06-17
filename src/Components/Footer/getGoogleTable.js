export default async function getGoogleTable() {
  let output2 = '';
  let xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://script.google.com/macros/s/AKfycbwXwNLpwzqL_opQxmmeKZ26Iow4AVoTVkVV26JFMkhDGTZR7JDr/exec',
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status == 200) {
      try {
        return JSON.parse(xhr.responseText);
        //       .result

        //     output2 = JSON.parse(xhr.responseText)
        //       .result.map((person, idx) => {
        //         if (idx > 0) {
        //           return `<dir class="cardInfo"><p>${person[1]}&nbsp${person[0]}</p><a href="${person[3]}"></a><p>${person[4]}</p><img src="${person[5]}" alt="${person[1]}&nbsp${person[0]}"></dir>`;
        //         }
        //       })
        //       .join('');
        //     console.log(output2);
      } catch (e) {
        console.log(e);
      }
    }
    // document.getElementById('info').innerHTML = output2;
  };
  xhr.send();
}
