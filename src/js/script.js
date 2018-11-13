

import ElementToggle from './modules/toggle/ElementToggle';
import Searchbox from './elements/EmptySearchbox';
import * as WebFont from 'webfontloader'

/**
  *
  * @desc WebfontLoader
  *
*/



WebFont.load({
  google: {
    families: ['Josefin Sans:100,400,700'],
  },
});


const toggles = document.querySelectorAll('[data-module="toggle"]');

for (let toggle of toggles) {
  toggle = new ElementToggle(toggle);
}



const searchboxes = document.querySelectorAll('[data-module="searchbox"]');

for (let searchbox of searchboxes) {
  searchbox = new Searchbox(searchbox);
}
