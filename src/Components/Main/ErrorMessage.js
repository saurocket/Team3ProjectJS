
export const ErrorMessage = () => {
  const paginationRef = document.querySelector('#pagination');
 if(paginationRef){
   paginationRef.style.display = 'none'
 }
  const eventListRef = document.querySelector('.event-list')
  if (!eventListRef){
    return;
  }
  eventListRef.innerHTML = ''
  const textAlert = `<p class="errorMessage">Sorry but i can not help :)</p>`
  eventListRef.insertAdjacentHTML('beforeend', textAlert)
  return
}