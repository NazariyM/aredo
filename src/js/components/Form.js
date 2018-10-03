import 'jquery-mask-plugin';
import Popup from 'vintage-popup';
import {css} from '../_helpers';

class Form {
  constructor() {
    this.$thanks = $('.js-submit-thanks');
    this.$fileBlock = $('.form-upload');

    this.init();
  }

  init() {
    this.maskInput();
    this.initFileHandler();
    this.initPopupThanks();
  }

  initFileHandler() {
    this.$fileBlock.each(function(i, block) {
      const $uploadItem = $(block).find('.form-upload__actions-item');

      $uploadItem.each(function(i, item) {
        const $item = $(item);
        const $input = $item.find('.form-upload__input');
        const $removeBtn = $item.find('.form-upload__remove-btn');

        $input.on('change', function(e) {
          const $target = $(e.target);

          if ($target.val()) {
            $item.addClass(css.active);
          }
        });

        $removeBtn.on('click', function() {
          $input.replaceWith($input.val(''));
          $item.removeClass(css.active);
        });
      });
    });
  }

  maskInput() {
    const $input = $('.js-tel-input');
    $input.mask('+7(000) 000-00-00');
  }

  initPopupThanks() {
    this.$thanks.on('submit', function(e) {
      e.preventDefault();
      const $this = $(this);

      Popup.closeAllPopups();
      const thanskPopInstance = $('.thanks-popup__btn').popup();
      thanskPopInstance.open();

      setTimeout(() => {
        thanskPopInstance.close();
      }, 2000);

      $this[0].reset();
    });
  }
}

export default new Form();
