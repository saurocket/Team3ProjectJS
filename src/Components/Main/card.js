
const tempSrc = 'https://i115.fastpic.ru/thumb/2021/0623/08/_2320c7d1bd223718e903206c0fb88808.jpeg'

export const Card = (src = tempSrc ,event = 'Slipknot', date = '13-05-2021', place = 'Palace of Ukraine', id= 'default', index) => {
  const element = `
    <li class="event-card index=${index}" id="${id}">
    <div class="card-sett">
      <div class="overlay-img">
        <img class="card-img" src="${src}" alt="${event}"/>
      </div>
          <div>
          <h2 class="event-title">${event}</h2>
          <p class="event-date">${date}</p>
          <p class="event-location">${place}</p>
          </div>
        </div>
  </li>`
  return element
}