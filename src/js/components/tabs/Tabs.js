
/*
*
* Tabs class with A11y included
*
* @author: Patrick Teulings
*
*/




export default class Tabs {

  constructor (_elem) {
    this.elem = _elem;

    this.config = {
      trigger: '.js-trigger',
      target: '.js-target',
    }

    this.triggers = this.elem.querySelectorAll(this.config.trigger);
    this.targets = this.elem.querySelectorAll(this.config.target);

    this.addEvents();
  }

  /**
  *
  * @desc Adds our initial events
  * @param
  * @returns
  *
  */

  addEvents() {
    for(let trigger of this.triggers) {
      trigger.addEventListener('click', (e) => {
        this.setActiveTab(e.target);
      });
    }
  }

  /**
  *
  * @desc Sets the active tab based on the HTML element clicked
  *
  */

  setActiveTab(_elem) {

    /* Reset previous targets / panels */

    for(let target of this.targets) {
      target.classList.remove('active');
      target.setAttribute('aria-hidden', 'true');
    }

    /* Reset previous triggers / tabs */

    for(let trigger of this.triggers) {
      trigger.classList.remove('active');
      trigger.setAttribute('aria-selected', 'false');
    }

    /* Define new active elements  */

    let activePanel = document.querySelector(`#${_elem.dataset.target}`);
    let activeTab = _elem;


    /* Set active target / panel */

    activePanel.classList.add('active');
    activePanel.setAttribute('aria-hidden', 'false');


    /* Set active trigger / tab */

    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');

  }


  /**
  *
  * @desc Resets our fields content
  *
  */

  resetField() {
    this.target.value = '';
    this.trigger.classList.remove('is-active');
  }
}
