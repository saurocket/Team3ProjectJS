function loadData() {
    return new Promise((resolve) => {
      setTimeout(resolve, 700);
    })
  }
  loadData()
    .then(() => {
      let preloaderEl = document.getElementById('preloader');
      preloaderEl.classList.add('hidden');
      preloaderEl.classList.remove('visible');
    });