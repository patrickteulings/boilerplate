

import ElementToggle from './modules/toggle/ElementToggle';
import Searchbox from './elements/EmptySearchbox';
import SocialShare from './elements/SocialShare';
import Tabs from './components/tabs/Tabs';
import * as WebFont from 'webfontloader'

/**
  *
  * @desc WebfontLoader
  *
*/



WebFont.load({
  google: {
    families: ['Josefin Sans:100,300,700'],
  },
});


const toggles = document.querySelectorAll('[data-module="toggle"]');

for (let toggle of toggles) {
  toggle = new ElementToggle(toggle);
}

/**
  *
  * @desc A searchbox with reset button
  * @param -
  * @returns -
  *
  */

const searchboxes = document.querySelectorAll('[data-module="searchbox"]');

for (let searchbox of searchboxes) {
  searchbox = new Searchbox(searchbox);
}

/**
  *
  * @desc Social Share buttons
  *
  */

const shareIcons = document.querySelectorAll('[data-module="socialshare"]');

for (let shareIcon of shareIcons) {
  shareIcon = new SocialShare(shareIcon);
}

/**
  *
  * @desc A tab component
  *
  */

 const tabElements = document.querySelectorAll('[data-module="tabs"]');

 for (let tabs of tabElements) {
   tabs = new Tabs(tabs);
 }
