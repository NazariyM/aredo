import objectFitVideos from 'object-fit-videos';
import objectFitImages from 'object-fit-images';
import '@fancyapps/fancybox';

import {$document, $window, $scrolledElements, css} from './_helpers';

import './components/Sliders';
import './components/VideoBlock';
import './components/Popups';
import './components/MobNav';
import './components/Form';
import './sections/Contact';

export class Common {
  constructor() {
    this.$screen = $('.screen');
    this.$main = $('.main');
    this.$requestBtn = $('.request-btn');
    this.init();
  }
  init() {
    objectFitImages();
    objectFitVideos();
    this.scrollNextSect();
    if (this.$requestBtn.length) this.showRequestBtn();
    // this.addClass();
  }

  scrollNextSect() {
    $('.next-section-btn').on('click', function() {
      const $section = $(this).closest('section').next().offset().top;
      $scrolledElements.animate({ scrollTop: $section }, 700);
    });
  }

  showRequestBtn() {
    const h = this.$screen.outerHeight();

    $window.on('scroll', (e) => {
      const offsetTop = $(e.currentTarget).scrollTop();

      if (offsetTop > (h + 150)) {
        this.$requestBtn.addClass(css.active);
      } else {
        this.$requestBtn.removeClass(css.active);
      }

    });
  }

  // addClass() {
  //   if (detectIE) $body.addClass('ie');
  // }
}

export default new Common();
