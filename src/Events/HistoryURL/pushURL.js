export function setLocation(curLoc){
    try {
      history.pushState(null, null, curLoc);
      return;
    } catch(e) {}
    location.hash = '#' + curLoc;
}


// добавляет полученую строку в URL
// Пример
// http://localhost:1234/
// вызывает функцию setLocation("text")
// получаем без перезагрузки страници http://localhost:1234/text 