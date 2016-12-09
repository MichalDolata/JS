/**
 * Created by preb on 09.12.16.
 */
function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    if(!key) return;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function stopSound() {
    this.classList.remove('playing');
}

document.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', stopSound));