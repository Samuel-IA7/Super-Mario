const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvem = document.querySelector('.nuvem');

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const nuvemPosition = nuvem.offsetLeft;

    if (pipePosition <= 62 && marioPosition < 90 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '100px'
        mario.style.marginLeft = '-20px'
        mario.style.marginBottom = '-20px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
