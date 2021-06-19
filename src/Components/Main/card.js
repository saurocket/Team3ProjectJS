
const tempSrc = 'https://i40.fastpic.ru/big/2012/0907/5b/70b76de8433b0a78cfb445378217025b.jpg'

export const Card = (src = tempSrc ,event = 'Slipknot', date = '13-05-2021', place = 'Palace of Ukraine') => {
  const element = `
    <li class="event-card">
      <article class="card">
        <div class="overlay-img">
          <img class="card-img" src="${src}" alt="${event}"/>
          <div class="before-img"></div>
        </div>
        <div class="event-info">
          <h2 class="event-title">${event}</h2>
          <p class="event-date">${date}</p>
          <p class="event-location">${place}</p>
        </div>
    </article>
  </li>`
  return element
}