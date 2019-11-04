import ElementToggle from './modules/toggle/ElementToggle';
import Searchbox from './elements/EmptySearchbox';
import SocialShare from './elements/SocialShare';
import Tabs from './components/tabs/Tabs';
import Accordion from './components/accordion/Accordion';
import * as WebFont from 'webfontloader';
import inView from 'in-view';

/**
 *
 * WebfontLoader
 *
 */

WebFont.load({
  google: {
    families: ['Josefin Sans:100,300,700']
  }
});

const toggles = document.querySelectorAll('[data-module="toggle"]');

for (let toggle of toggles) {
  toggle = new ElementToggle(toggle);
}

/**
 *
 * A searchbox with reset button
 * @param -
 * @returns
 *
 */

const searchboxes = document.querySelectorAll('[data-module="searchbox"]');

for (let searchbox of searchboxes) {
  searchbox = new Searchbox(searchbox);
}

/**
 *
 * Social Share buttons
 *
 */

const shareIcons = document.querySelectorAll('[data-module="socialshare"]');

for (let shareIcon of shareIcons) {
  shareIcon = new SocialShare(shareIcon);
}

/**
 *
 * A tab component
 *
 */

const tabElements = document.querySelectorAll('[data-module="tabs"]');

for (let tabs of tabElements) {
  tabs = new Tabs(tabs);
}

/**
 *
 * An accordion component
 *
 */

const accordions = document.querySelectorAll('[data-module="accordion"]');

for (let accordion of accordions) {
  accordion = new Accordion(accordion);
}


inView('.section')
  .on('enter', (el) => {
    el.classList.add('inview');
  })
  .on('exit', (el) => {
    el.classList.remove('inview');
  });
