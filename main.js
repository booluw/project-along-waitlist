import './main.scss'

import { ripple } from './js/microinteractions';

const headerBtn = document.querySelector('.header__button');


headerBtn.addEventListener('mouseover', () => ripple(headerBtn));