import $ from 'jquery';
import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Sliders {
  constructor() {
    this.$screenSlider = $('.screen__slider');
    this.$prodSlider = $('.prod-slider');
    this.$catalogSlider = $('.catalog-slider');
    this.$clientsSlider = $('.clients__slider');
    this.$portfolioView = $('.js-portfolio-view');
    this.$productView = $('.js-product-view');

    const iconLeft = svgIcon('sld-arr-l');
    const iconRight = svgIcon('sld-arr-r');

    this.defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 800,
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: true,
      prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
      nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
      rows: 0
    };

    this.init();
  }

  init() {
    if (this.$screenSlider.length) this.initScreenSlider();
    if (this.$prodSlider.length) this.initProdSlider();
    if (this.$catalogSlider.length) this.initCatalogSld();
    if (this.$clientsSlider.length) this.initClientsSld();
    if (this.$portfolioView.length) this.initPortfolioView();
    if (this.$productView.length) this.initProdView();
  }

  initScreenSlider() {
    this.$screenSlider.slick($.extend({}, this.defaultOptions, {
      dotsClass: 'screen__slider-dots slider-dots',
      dots: true,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 3000
    }));
  }

  initProdSlider() {
    this.$prodSlider.slick($.extend({}, this.defaultOptions));
  }

  initCatalogSld() {
    this.$catalogSlider.slick($.extend({}, this.defaultOptions, {
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    }));
  }

  initClientsSld() {
    this.$clientsSlider.slick($.extend({}, this.defaultOptions, {
      slidesToShow: 4,
      rows: 2,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    }));
  }

  initPortfolioView() {
    this.$portfolioView.each((i, el) => {
      const $view = $(el).find('.portfolio__view');
      const $nav = $(el).find('.portfolio__nav');

      $view.slick($.extend({}, this.defaultOptions, {
        asNavFor: $nav,
        speed: 400
      }));
      $nav.slick($.extend({}, this.defaultOptions, {
        asNavFor: $view,
        slidesToShow: 4,
        focusOnSelect: true,
        arrows: false
      }));
    });
  }

  initProdView() {
    this.$productView.each((i, el) => {
      const $view = $(el).find('.product__view');
      const $nav = $(el).find('.product__nav');

      $view.slick($.extend({}, this.defaultOptions, {
        asNavFor: $nav,
        speed: 400
      }));
      $nav.slick($.extend({}, this.defaultOptions, {
        asNavFor: $view,
        slidesToShow: 3,
        focusOnSelect: true,
        arrows: false
      }));
    });
  }
}

export default new Sliders();
