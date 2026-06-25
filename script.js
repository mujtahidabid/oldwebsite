import { createTimer, utils } from 'animejs';

const [ $time ] = utils.$('.time');

createTimer({
  duration: 2000,
  onUpdate: self => $time.innerHTML = self.currentTime
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '40px',
    duration:2500,
    reset: true

});

sr.reveal('.container h6',{delay:150, origin: 'left'})
sr.reveal('.container h3',{delay:250, origin: 'right'})
sr.reveal('.container h1',{delay:400, origin: 'top'})
sr.reveal('.container h1',{delay:550, origin: 'left'})
sr.reveal('.main-bttn',{delay:700, origin: 'bottom'})
sr.reveal('.social',{delay:850, origin: 'right'})



