

let portfolioSwiper = new Swiper('.portfolio__slider', {
   spaceBetween: 40,
   loop: true,
   slidesPerView: 4,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 12
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      991: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   }
});

let banerSwiper = new Swiper('.banner__slider', {
   slidesPerView: 1,
   spaceBetween: 80,
   loop: true,
   autoHeight: true,
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // pagination: {
   //    el: '.swiper-pagination',
   //    clickable: true,
   // },
   // breakpoints: {
   //    1280: {
   //       spaceBetween: 90
   //    },
   //    600: {
   //       spaceBetween: 40
   //    },
   //    320: {
   //       slidesPerView: 1,
   //       spaceBetween: 20
   //    },
   // },

});

let calendarSwiper = new Swiper('.calendar__slider', {
   spaceBetween: 40,
   loop: true,
   slidesPerView: 4,
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 12
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      991: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   }
});

let qualitySwiper = new Swiper('.quality__slider', {
   cssMode: true,
   slidesPerView: 3,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      320: {
         cssMode: false,
         slidesPerView: 1,
         spaceBetween: 12,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
      },
      600: {
         cssMode: true,
         slidesPerView: 3,
         spaceBetween: 20
      },
      1280: {
         cssMode: true,
         slidesPerView: 3,
         spaceBetween: 40,
      },
   }
});

let reviewsSwiper = new Swiper('.reviews__slider', {
   spaceBetween: 40,
   loop: true,
   slidesPerView: 2,
   autoHeight: false,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      320: {
         autoHeight: true,
         slidesPerView: 1,
         spaceBetween: 12
      },
      600: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      1280: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
   }
});

let newsSwiper = new Swiper('.news__slider', {
   spaceBetween: 40,
   loop: true,
   slidesPerView: 4,

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 12
      },
      600: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      991: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   }
});

let awardsSwiper = new Swiper('.awards__slider', {
   cssMode: true,
   slidesPerView: 4,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      600: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 4,
      },
      1280: {
         slidesPerView: 4,
      },
   }
});

let advantagesSwiper = new Swiper('.advantages__slider', {
   loop: false,
   cssMode: true,
   slidesPerView: 3,
   slidesPerColumn: 2,
   slidesPerColumnFill: 'row',
   spaceBetween: 20,
   // autoHeight: false,
   breakpoints: {
      320: {
         slidesPerColumn: 1,
         slidesPerView: 1,
         spaceBetween: 12,
         cssMode: false,
         loop: true,
         // autoHeight: true,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
      },
      600: {
         slidesPerColumn: 3,
         slidesPerView: 2,
         spaceBetween: 20,
         pagination: false,
         cssMode: true,
      },
      991: {
         slidesPerColumn: 3,
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1280: {
         slidesPerColumn: 2,
         slidesPerView: 3,
         spaceBetween: 20,
      },
   }
});

let brendsSwiper = new Swiper('.brends__slider', {
   slidesPerView: 'auto',
   loop: true,
   spaceBetween: 40,
});

let automatizationSwiper = new Swiper('.automatization__slider', {
   slidesPerView: 'auto',
   loop: true,
   spaceBetween: 40,
});