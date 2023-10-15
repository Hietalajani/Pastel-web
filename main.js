const menu = document.querySelector('.menu');
const menudiv = document.querySelector('.menudiv');
const options = ['About us', 'Media', 'Contact'];
const ids = ['#about', '#media', '#contact'];

menu.addEventListener('click', () => {
  if (menudiv.classList.contains('open')) {
    close();
  } else {
    open();
  }
});

function close() {
  const headers = document.querySelectorAll('.headers');
  headers.forEach(header => {
    header.style.opacity = '0';
  });
  setTimeout(() => {
    menudiv.classList.remove('open');
  }, 500);
}

function open() {
  menudiv.classList.add('open');

  for (let i = 0; i < 3; i++) {
    const header = document.createElement('a');
    let top = `${i * 15 + 20}%`;
    header.href = ids[i];
    header.innerText = options[i];
    header.className = 'headers';
    header.style.top = top;

    header.onclick = () => {
      close();
      document.querySelector('#reverse').beginElement();
    };

    menudiv.appendChild(header);
    setTimeout(() => {
      header.style.opacity = '1';
    }, 500);
  }
}