const buttonUp = document.querySelector('.button-up');

buttonUp.addEventListener('click', (evt) => {
  evt.preventDefault();

  const blockId = buttonUp.getAttribute('href').substring(1);

  document.querySelector(`#${blockId}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})