const threetrafficlights = document.querySelector('#threetrafficlights');

const circle1 = document.querySelector('#circle1');

const circle2 = document.querySelector('#circle2');

const circle3 = document.querySelector('#circle3');



function makeGreen () {
    circle1.style.background = ('green');
    circle3.style.background = ('black');
    threetrafficlights.removeEventListener('click', makeRed, makeGreen);
    threetrafficlights.addEventListener('click', makeYellow);
}

function makeYellow () {
    circle2.style.background = ('yellow');
    circle1.style.background = ('black');
    threetrafficlights.removeEventListener('click', makeGreen, makeYellow);
    threetrafficlights.addEventListener('click', makeRed);
}

function makeRed () {
    circle3.style.background = ('red');
    circle2.style.background = ('black');
    threetrafficlights.removeEventListener('click', makeYellow, makeRed);
    threetrafficlights.addEventListener('click', makeGreen);
}

threetrafficlights.addEventListener('click', makeGreen);




// ВТОРОЙ ВАРИАНТ (ПОЛУЧИЛСЯ СЛУЧАЙНО)



// function makeGreen () {
//     circle1.style.background = ('green');
//     circle3.style.background = ('black');
//     circle1.removeEventListener('click', makeRed);
//     circle1.removeEventListener('click', makeGreen);
//     circle1.addEventListener('click', makeYellow);
//     circle2.addEventListener('click', makeYellow);
//     circle3.addEventListener('click', makeYellow);
// }

// function makeYellow () {
//     circle2.style.background = ('yellow');
//     circle1.style.background = ('black');
//     circle2.removeEventListener('click', makeGreen);
//     circle2.removeEventListener('click', makeYellow);
//     circle1.addEventListener('click', makeRed);
//     circle2.addEventListener('click', makeRed);
//     circle3.addEventListener('click', makeRed);
// }

// function makeRed () {
//     circle3.style.background = ('red');
//     circle2.style.background = ('black');
//     circle3.removeEventListener('click', makeYellow);
//     circle3.removeEventListener('click', makeRed);
//     circle1.addEventListener('click', makeGreen);
//     circle2.addEventListener('click', makeGreen);
//     circle3.addEventListener('click', makeGreen);
// }

// circle1.addEventListener('click', makeGreen);
// circle2.addEventListener('click', makeGreen);
// circle3.addEventListener('click', makeGreen);



