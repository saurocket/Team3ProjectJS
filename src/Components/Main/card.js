
const tempSrc = 'https://i40.fastpic.ru/big/2012/0907/5b/70b76de8433b0a78cfb445378217025b.jpg'

export const Card = (src = tempSrc ,event = 'Slipknot', date = '13-05-2021', place = 'Palace of Ukraine') => {
  const element = `
           <li>
          <div class="overlay-img">
            <img src="${src}" alt="${event}" width="100%"/>
            <div class="overlay"></div>
          </div>
          <div class="event">
            <h2 class="title">${event}</h2>
            <p class="date">${date}</p>
            <p class="location">${place}</p>
          </div>
        </li>`
  return element
}