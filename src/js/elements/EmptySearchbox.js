
/*
*
* Simple method for an appearing / disappearing 'clear input' icon
* for your input text fields
* @author: Patrick Teulings
*
*/




export default class EmptySearchbox {

  constructor (_elem) {
    this.elem = _elem;

    this.config = {
      target: '.js-target',
      emptyTrigger: '.js-empty-trigger',
    }

    Object.assign(this.config, JSON.parse(this.elem.dataset.config));

    this.target = this.elem.querySelector(this.config.target);
    this.trigger = this.elem.querySelector(this.config.emptyTrigger);

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

    this.target.addEventListener('keyup', (e) => {
      this.handleKeyDown(e);
    });

    this.trigger.addEventListener('click', (e) => {
      this.resetField(e);
    });

  }

  /**
  *
  * @desc Check whether the input field is empty or not
  *
  */

  handleKeyDown() {
    if(this.target.value !== '') {
      this.trigger.classList.add('is-active');
    }
    else {
      this.resetField();
    }
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
