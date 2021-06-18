const API_KEY = 'gJpfLxyiUFDWfVGHbxtGAyZtqKfpYD4o'
const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json'

export const api = (keyword, countryCode,size,page) => {
  let fetchURL =  `${baseURL}?apikey=${API_KEY}&size=${size}&page=${page}`
  if (!!keyword) fetchURL+=`&keyword=${keyword}`
  if (!!countryCode) fetchURL+=`&countryCode=${countryCode}`
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET',fetchURL)
    xhr.responseType = 'json'

    xhr.onload = () => {
      if(xhr.status >= 400){
        reject(xhr.response)
      }else{
        resolve(xhr.response)
      }
    }
    xhr.onerror = () => {
     reject(xhr.response)
    }
     xhr.send()
  })

}

