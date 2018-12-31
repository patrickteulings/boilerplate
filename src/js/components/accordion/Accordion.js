
/*
*
* Accordion / FAQ class with A11y included
*
* @author: Patrick Teulings
*
*/




export default class Accordion {

  constructor (_elem) {
    this.elem = _elem;

    this.config = {
      trigger: '.js-trigger',
      target: '.js-target',
      closeSiblings: false,
    }

    this.triggers = this.elem.querySelectorAll(this.config.trigger);
    this.targets = this.elem.querySelectorAll(this.config.target);
    this.triggerButtons;

    this.init();
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
    this.triggerButtons = document.querySelectorAll('.js-button-trigger')
    for(let triggerButton of this.triggerButtons) {
      triggerButton.addEventListener('click', (e) => {
        this.setActiveElement(e.target);
      });
    }
  }

  /**
  *
  * @desc Sets the active tab based on the HTML element clicked
  *
  */

  setActiveElement(_elem) {


    /* Define new active elements  */
    const TARGET_ID = _elem.dataset.target;
    let activeHeader = _elem;
    let activeContent = document.querySelector(`#${_elem.dataset.target}`);


    if(activeHeader.classList.contains('active')) {
      /* Set active target / panels */

      activeContent.classList.remove('active');
      activeContent.setAttribute('aria-hidden', 'true');


      /* Set active trigger / heading */

      activeHeader.classList.remove('active');
      activeHeader.setAttribute('aria-expanded', 'false');
    }
    else {
      /* Set active target / panels */

      activeContent.classList.add('active');
      activeContent.setAttribute('aria-hidden', 'false');

      /* Set active trigger / heading */

      activeHeader.classList.add('active');
      activeHeader.setAttribute('aria-expanded', 'true');

    }


    if(this.config.closeSiblings === true) {

      /* Reset previous targets / panels */

      for(let target of this.targets) {
        if(target.id !== TARGET_ID) {
          target.classList.remove('active');
          target.setAttribute('aria-hidden', 'true');
        }
      }

      /* Reset previous triggers / headings */

      for(let triggerButton of this.triggerButtons) {
        if(triggerButton.dataset.target !== TARGET_ID) {
          triggerButton.classList.remove('active');
          triggerButton.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }


/**
  *
  * @desc Initialise the accordion and build a button element and ARIA attributes
  * @param none
  * @returns void
  *
  */

  init() {
    for(let trigger of this.triggers) {
      let button = document.createElement('button');

      button.innerHTML = trigger.innerHTML;
      button.className = 'js-button-trigger';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', trigger.dataset.target);
      button.setAttribute('data-target', trigger.dataset.target);

      trigger.innerHTML = '';
      trigger.appendChild(button);
    }
  }
}
