import 'bootstrap/js/dist/collapse';
import 'smooth-scroll/dist/smooth-scroll.polyfills.min.js';
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.min.js';
import './scss/main.scss';

new SmoothScroll('a[href*="#"]', {
  speed: 500
});
