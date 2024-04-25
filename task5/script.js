const textinabox = document.querySelector('input');

const knopka = document.querySelector('button');

const strokavnizu = document.querySelector('#duplicateField');

function change () {
    strokavnizu.textContent = textinabox.value;
}

textinabox.addEventListener('keydown', change);
textinabox.addEventListener('keyup', change);


knopka.addEventListener('click', () => {
    console.log(textinabox.value);
    textinabox.value = "";
    strokavnizu.textContent = "";
})