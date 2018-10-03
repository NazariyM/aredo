import { css } from '../_helpers';

class VideoBlock {
  constructor() {
    this.$blocks = $('.video-block');

    this.init();
  }

  init() {
    this.play();
  }

  play() {
    this.$blocks.each((i, $block) => {
      const $btn = $($block).find('button');
      const $video = $($block).find('video');
      const $contentWrap = $btn.parent();

      $btn.on('click', () => {
        $($block).addClass(css.active);
        $contentWrap.addClass(css.hide);
        setTimeout(() => {
          $video[0].play();

          $video.on('click', () => {
            $video[0].pause();
            $($block).removeClass(css.active);
            $contentWrap.removeClass(css.hide);
          });
        }, 300);
      });
    });
  }
}

export const VideoBlockAPI = new VideoBlock();
