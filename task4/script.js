const linky = document.querySelector('a');

linky.addEventListener('click', function(event) {
    let newlinktext = prompt('Введите новое название ссылки');
    linky.textContent = newlinktext;
    event.preventDefault();
})