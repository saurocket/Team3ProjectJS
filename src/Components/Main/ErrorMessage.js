
export const ErrorMessage = () => {
  const eventListRef = document.querySelector('.event-list')
  if (!eventListRef){
    return;
  }
  eventListRef.innerHTML = ''
  const textAlert = `<p>Sorry but i can not help :)</p>`
  eventListRef.insertAdjacentHTML('beforeend', textAlert)
  return
}