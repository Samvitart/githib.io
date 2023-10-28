document.querySelector('.button__search').addEventListener('click', function () {
  document.querySelector('.button__input').classList.toggle('search-active')
});

document.querySelector('.ac-trigger').addEventListener('click', () => {
    document.querySelector('.ac-trigger__svg').classList.toggle('is-active__svg')
  });

/*бургер-меню*/
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.burger-active').classList.toggle('burger-active__open')
  document.querySelector('.burger-nav__down').classList.toggle('burger-nav__down-active')
  document.querySelector('.burger__line-first').classList.toggle('burger__line-disable')
  document.querySelector('.burger__line-fourth').classList.toggle('burger__line-disable')
  document.querySelector('.burger__line-second').classList.toggle('burger__line-left')
  document.querySelector('.burger__line-third').classList.toggle('burger__line-right')
});
document.querySelector('.burger-nav__link').addEventListener('click', function () {
  document.querySelector('.burger-active').classList.remove('burger-active__open')
});

//Что в эфире
document.querySelector('.header-down__btns-mobile').addEventListener('click', function () {
  document.querySelector('.bottom-right').classList.toggle('bottom-right--active')
  document.querySelector('.header-down__svg').classList.toggle('header-bottom__svg-active')
});

//Кнопка паузы в хэдере
document.querySelector('.broadcast-left__play').addEventListener('click', function () {
  document.querySelector('.broadcast-left__play .passive').classList.toggle('btn-active');
});
document.querySelector('.broadcast-right__play').addEventListener('click', function () {
  document.querySelector('.broadcast-right__play .passive').classList.toggle('btn-active');
});

/*подключение модального окна*/
const modal = new GraphModal();

document.querySelector('.button__authorization').addEventListener('click', function () {
  new GraphModal().open('first');
})

// /*кнопка Еще подкасты*/
document.querySelector('.podcast__more').addEventListener('click', function () {
  let elements = document.getElementsByClassName('card');
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("card-active");
  }
});

document.querySelector('.podcast__more').addEventListener('click', function () {
  document.querySelector('.podcast__more').classList.toggle('podcast__more--passive')
});

const element = document.querySelector('.broadcasts__author');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});

//аккордион
let accordion = new Accordion('.accordion', {
  duration: 600,

    showMultiple: false,
    openOnInit: [0],
    collapse: true,

});
document.querySelectorAll('.ac-panel__name').forEach(function (guestsBtn) {
  guestsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.ac-panel__name').forEach(function (btn) {
      btn.classList.remove('ac-panel__name--active')
    });
    e.currentTarget.classList.add('ac-panel__name--active');
    document.querySelectorAll('.profile').forEach(function (guestsBtn) {
      guestsBtn.classList.remove('profile--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('profile--active');

    e.preventDefault();
  });
  document.getElementById('ac-0').classList.add('is-active')
  document.querySelector('.ac.js-enabled .ac-panel').classList.add('acactivepanel')

});



//свайпер
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  loop: false,
  FollowFinger: true,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    592: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 2,
    },
  },
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')
swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  swiper.slideNext();
})

//плавный переход по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

/* валидация формы */
const validation = new window.JustValidate('.about-form');
validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Ошибка'
    },
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]);




