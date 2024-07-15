// Модальное окно Разместить

let btnsConnect = document.querySelectorAll(".btnsConnect");

for(btn of btnsConnect) {
  btn.addEventListener("click", function() {
    document.getElementById("modal-connect").classList.add("open")
    document.querySelector("#scroll").classList.add("body-scroll")
    document.querySelector(".modal-content").classList.add("body-scroll")
  
    document.querySelector(".modal-main__btn").addEventListener("click", event => {
      event.preventDefault()
      document.getElementById("modal-connect").classList.remove("open")
      document.getElementById("modal-final").classList.add("open")
    })
  })

  // Закрытие окна Разместить

  document.querySelector(".modal-connect__btn-close").addEventListener("click", function() {
    document.getElementById("modal-connect").classList.remove("open")
    document.querySelector("#scroll").classList.remove("body-scroll")
  })

  document.querySelector("#modal-connect .modal-content").addEventListener('click', event => {
    event._isClickWithInModal = true
  })
  document.getElementById("modal-connect").addEventListener('click', event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
    document.querySelector("#scroll").classList.remove("body-scroll")
  })
}

// Модальное окно Реклама

let btnsAdvert = document.querySelectorAll(".btnsAdvert");

for(btn of btnsAdvert) {
  btn.addEventListener("click", function() {
    document.getElementById("modal-advert").classList.add("open")
    document.querySelector("#scroll").classList.add("body-scroll")
    document.querySelector(".modal-content").classList.add("body-scroll")
  
    document.querySelector(".modal-main__btn").addEventListener("click", event => {
      event.preventDefault()
      document.getElementById("modal-advert").classList.remove("open")
      document.getElementById("modal-final").classList.add("open")
    })
  })

  // Закрытие окна Реклама

  document.querySelector(".modal-advert__btn-close").addEventListener("click", function() {
    document.getElementById("modal-advert").classList.remove("open")
    document.querySelector("#scroll").classList.remove("body-scroll")
  })

  document.querySelector("#modal-advert .modal-advert").addEventListener('click', event => {
    event._isClickWithInModal = true
  })
  document.getElementById("modal-advert").addEventListener('click', event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
    document.querySelector("#scroll").classList.remove("body-scroll")
  })
}


// Модальное окно Аналитика

let btnsAnalytics = document.querySelectorAll(".btnsAnalytics");

for(btn of btnsAnalytics) {
  btn.addEventListener("click", function() {
    document.getElementById("modal-analytics").classList.add("open")
    document.querySelector("#scroll").classList.add("body-scroll")
    document.querySelector(".modal-content").classList.add("body-scroll")
  
    document.querySelector(".modal-main__btn").addEventListener("click", event => {
      event.preventDefault()
      document.getElementById("modal-analytics").classList.remove("open")
      document.getElementById("modal-final").classList.add("open")
    })
  })

  // Закрытие окна Аналитика

  document.querySelector(".modal-analytics__btn-close").addEventListener("click", function() {
    document.getElementById("modal-analytics").classList.remove("open")
    document.querySelector("#scroll").classList.remove("body-scroll")
  })

  document.querySelector("#modal-analytics .modal-analytics").addEventListener('click', event => {
    event._isClickWithInModal = true
  })
  document.getElementById("modal-analytics").addEventListener('click', event => {
    if (event._isClickWithInModal) return
    event.currentTarget.classList.remove('open')
    document.querySelector("#scroll").classList.remove("body-scroll")
  })
}

// Mодальное окно Город

document.getElementById("modal__btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.add("open");
  document.querySelector("#scroll").classList.add("body-scroll")
});

document.getElementById("close-city-btn").addEventListener("click", function() {
  document.getElementById("modal__city").classList.remove("open");
  document.querySelector("#scroll").classList.remove("body-scroll")
});

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("modal__city").classList.remove("open");
      document.querySelector("#scroll").classList.remove("body-scroll")
  }
});

document.querySelector("#modal__city .modal-content").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal__city").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
  document.querySelector("#scroll").classList.remove("body-scroll")
});


// Закрытие окна Отправлены

document.querySelector(".modal-final__btn-close").addEventListener("click", function() {
  document.getElementById("modal-final").classList.remove("open")
  document.querySelector("#scroll").classList.remove("body-scroll")
})

document.querySelector(".modal-final__btn").addEventListener("click", function() {
  document.getElementById("modal-final").classList.remove("open")
  document.querySelector("#scroll").classList.remove("body-scroll")
})

document.querySelector("#modal-final .modal-content").addEventListener('click', event => {
  event._isClickWithInModal = true
})
document.getElementById("modal-final").addEventListener('click', event => {
  if (event._isClickWithInModal) return
  event.currentTarget.classList.remove('open')
  document.querySelector("#scroll").classList.remove("body-scroll")
})


// Поиск

document.querySelector(".header-down__form-input").addEventListener("input", function() {
  document.querySelector(".header__dropdown-menu").classList.add("active")
  document.getElementById("modal-dropdown").classList.add("open");

  let links = document.querySelectorAll(".dropdown-menu__link")
  for (link of links) {
    link.addEventListener("click", event => {
      document.querySelector(".header-down__form-input").value = link.children[0].textContent.replace(/\s+/g, ' ').trim()
      document.querySelector(".header__dropdown-menu").classList.remove("active")
      document.getElementById("modal-dropdown").classList.remove("open");
    })
  }

  window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.header__dropdown-menu') && !target.closest('.dropdown-menu__link')) { 
      document.querySelector(".header__dropdown-menu").classList.remove('active') 
      document.getElementById("modal-dropdown").classList.remove("open");
    }
  })
})


// Выбор станции

if(document.querySelector(".block-count__dropdown-btn")) {
  document.querySelector(".block-count__dropdown-btn").addEventListener("click", function() {
    document.querySelector(".block-count__dropdown-content").classList.add('active')
  })
  
  document.getElementById("close-station-btn").addEventListener("click", function() {
    document.querySelector(".block-count__dropdown-content").classList.remove('active')
  })

  window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.block-count__dropdown')) { 
      document.querySelector(".block-count__dropdown-content").classList.remove('active') 
    }
  })
}

// Карта аптекам

if(document.querySelector(".section-list__map-btn")) {
  document.querySelector(".section-list__map-btn").addEventListener("click", function() {
    this.classList.add("hidden")

    // Карта Аптеки

    ymaps.ready(init2);
    function init2() {
      // Создание карты.
      var myMap = new ymaps.Map("map-pharma", {
          center: [55.736935, 37.516009],
          zoom: 14,
          controls: []
      });

      var myPlacemark = new ymaps.Placemark([55.747950, 37.501246], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker-map.svg',
        iconImageSize: [45, 60],
        iconImageOffset: [-3, -42]
      });

      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);

    };
    document.querySelector(".section-list__right").classList.add('active')
    document.querySelector(".section-list__list-btn").classList.add('active')
    document.querySelector(".section-list__content-left").classList.add("hidden")
    document.querySelector(".section-list__map").classList.add('active')
  })
}

if(document.querySelector(".section-list__list-btn")) {
  document.querySelector(".section-list__list-btn").addEventListener("click", function() {
    this.classList.remove("active")
    document.querySelector(".section-list__right").classList.remove('active')
    document.querySelector(".section-list__map-btn").classList.remove('hidden')
    document.querySelector(".section-list__content-left").classList.remove("hidden")
    document.querySelector(".section-list__map").classList.remove('active')
  })
}



// Карта Главная

if(document.querySelector(".section-top__map-btn")) {
  document.querySelector(".section-top__map-btn").addEventListener("click", function() {
    this.classList.add("hidden")
    document.querySelector(".section-top__right").classList.add('active')
    document.querySelector(".section-top__map").classList.add('active')
    document.querySelector(".section-top__list-btn").classList.add('active')
    document.querySelector(".section-top__list").classList.add("hidden")
  })
}

if(document.querySelector(".section-top__list-btn")) {
  document.querySelector(".section-top__list-btn").addEventListener("click", function() {
    this.classList.remove("active")
    document.querySelector(".section-top__right").classList.remove('active')
    document.querySelector(".section-top__map-btn").classList.remove('hidden')
    document.querySelector(".section-top__list").classList.remove("hidden")
    document.querySelector(".section-top__map").classList.remove('active')
  })
}


// Карта Карточка

if(document.querySelector(".block-count__map-btn")) {
  document.querySelector(".block-count__map-btn").addEventListener("click", function() {
    this.classList.add("hidden")

    ymaps.ready(init3);
    function init3() {
      // Создание карты.
      var myMap = new ymaps.Map("map3", {
          center: [55.736935, 37.516009],
          zoom: 14,
          controls: []
      });

      var myPlacemark = new ymaps.Placemark([55.747950, 37.501246], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/marker-map.svg',
        iconImageSize: [45, 60],
        iconImageOffset: [-3, -42]
      });

      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);

    };

    document.querySelector(".block-count__map-3").classList.add('active')
    document.querySelector(".block-count__list-btn").classList.add('active')
    document.querySelector(".block-count").classList.add("hidden")
    document.querySelector(".block-count__pagination").classList.add("hidden")
  })
}

if(document.querySelector(".block-count__list-btn")) {
  document.querySelector(".block-count__list-btn").addEventListener("click", function() {
    this.classList.remove("active")
    
    document.querySelector(".block-count__map-btn").classList.remove('hidden')
    document.querySelector(".block-count").classList.remove("hidden")
    document.querySelector(".block-count__pagination").classList.remove("hidden")
    document.querySelector(".block-count__map-3").classList.remove('active')
  })
}


// Карта Показать на карте (Карточка)

if(document.querySelector(".section-card__map-btn")) {
  let mapsBtn = document.querySelectorAll(".section-card__map-btn")
  for (btn of mapsBtn) {
    btn.addEventListener("click", function() {
      document.querySelector(".block-count__map-btn").classList.add("hidden")

      ymaps.ready(init4);
      function init4() {
        // Создание карты.
        var myMap = new ymaps.Map("map4", {
            center: [55.736935, 37.516009],
            zoom: 14,
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([55.747950, 37.501246], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/marker-map.svg',
          iconImageSize: [45, 60],
          iconImageOffset: [-3, -42]
        });

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
      };
      
      document.querySelector(".block-count__map-4").classList.add('active')
      document.querySelector(".block-count__list-btn").classList.add('active')
      document.querySelector(".block-count").classList.add("hidden")
      document.querySelector(".block-count__pagination").classList.add("hidden")
    })
  }
}

if(document.querySelector(".block-count__list-btn")) {
  document.querySelector(".block-count__list-btn").addEventListener("click", function() {
    this.classList.remove("active")
    let mapsBtn = document.querySelectorAll(".section-card__map-btn")
    for (btn of mapsBtn) {
      btn.classList.remove('hidden')
      document.querySelector(".block-count").classList.remove("hidden")
      document.querySelector(".block-count__pagination").classList.remove("hidden")
      document.querySelector(".block-count__map-4").classList.remove('active')
    }
    
    
  })
}


// Хлебные крошки

let selected = null;

if(document.querySelector(".section-alphabet__content")) {
  document.querySelector(".section-alphabet__content").addEventListener("click", event => {
    if (event.target.closest(".section-alphabet__btn")) {
      if (selected) {
        selected.classList.remove("section-alphabet__btn__active");
      }
      
      selected = event.target;
      
      selected.classList.add("section-alphabet__btn__active");
    }
  }, false);
}


if (document.querySelector(".section-alphabet__btn")) {
  let btnAlf = document.querySelectorAll(".section-alphabet__btn")
  for (btn of btnAlf) {
    btn.addEventListener("click", function() {
      document.querySelector(".breadcrumbs-item__hidden").style.display = "flex"
      document.querySelector(".breadcrumbs-item__hidden").textContent = this.textContent
      
    })
  }
}

if (document.querySelector(".section-group__item")) {
  let btnAlf = document.querySelectorAll(".section-group__item")
  for (btn of btnAlf) {
    btn.addEventListener("click", function() {
      document.querySelector(".breadcrumbs-item__hidden").style.display = "flex"
      document.querySelector(".breadcrumbs-item__hidden").textContent = this.textContent
    })
  }
}

if (document.querySelector(".section-category__left-item")) {
  let btnAlf = document.querySelectorAll(".section-category__left-item")
  for (btn of btnAlf) {
    btn.addEventListener("click", function() {
      document.querySelector(".breadcrumbs-item__hidden").style.display = "flex"
      document.querySelector(".breadcrumbs-item__hidden").textContent = this.textContent
    })
  }
}


// Фармгруппы табы

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-group__item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-group__group').forEach(function(tabContent) {
        tabContent.classList.remove('section-group__group__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-group__group__active')
      document.querySelectorAll('.section-group__item').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-group__item__active')
      })
      event.currentTarget.classList.add('section-group__item__active')
    })
  })
})  


// Статьи табы

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-category__left-item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-articleMain__list').forEach(function(tabContent) {
        tabContent.classList.remove('section-articleMain__list__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-articleMain__list__active')
      document.querySelectorAll('.section-category__left-item').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-category__left-item__active')
      })
      event.currentTarget.classList.add('section-category__left-item__active')
    })
  })
})  


// СтатьЯ табы

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-category__left-item').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-articleMain__content').forEach(function(tabContent) {
        tabContent.classList.remove('section-articleMain__content__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-articleMain__content__active')
      document.querySelectorAll('.section-category__left-item').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-category__left-item__active')
      })
      event.currentTarget.classList.add('section-category__left-item__active')
    })
  })
})  


// Слайдер Навигация

if(document.querySelector('.section-nav__swiper')) {
  const swiperDoc = new Swiper('.section-nav__swiper', {
    slidesPerView: 1.9,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".section-nav__btn-right",
      prevEl: ".section-nav__btn-left"
    },
  
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3.5,
      },
      993: {
        spaceBetween: 22,
        slidesPerView: 5,
      },
      1201: {
        spaceBetween: 22,
        slidesPerView: 6,
      },
    },
    
  });
}


// Слайдер Популярные

if(document.querySelector('.section-popular__list')) {
  const swiperDoc = new Swiper('.section-popular__list', {
    slidesPerView: 1,
    spaceBetween: 10,
    
    
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
}


// Слайдер Статьи

if(document.querySelector('.section-article__swiper')) {
  const swiperArticle = new Swiper('.section-article__swiper', {
    slidesPerView: 1.7,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".section-article__btn-right",
      prevEl: ".section-article__btn-left"
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });
}

// Слайдер Статьи Главная

if(document.querySelector('.section-article__swiper-main')) {
  const swiperArticle = new Swiper('.section-article__swiper-main', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".section-article__btn-right",
      prevEl: ".section-article__btn-left"
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 4,
      }
    },
  });
}

// Табы Аптека

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-tab__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-tab__card').forEach(function(tabContent) {
        tabContent.classList.remove('section-tab__card__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-tab__card__active')
      document.querySelectorAll('.section-tab__btn').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-tab__btn__active')
      })
      event.currentTarget.classList.add('section-tab__btn__active')
    })
  })
})  


// Селект поиск

const elements = document.querySelectorAll('.js-choice');

for(el of elements) {
  const choices = new Choices(el, {
    searchEnabled : false,
    itemSelectText: ""
  });
}


// Тултипы

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    'customClass': 'custom-tooltip'
  })
})

// Табы Карточка

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-content__tab-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-content__card').forEach(function(tabContent) {
        tabContent.classList.remove('section-content__card__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-content__card__active')

      document.querySelectorAll('.section-content__tab-btn').forEach(function(activeBtn) {
        activeBtn.classList.remove('section-content__tab-btn__active')
      })
      event.currentTarget.classList.add('section-content__tab-btn__active')

    })
  })
})  


// Слайдер форма выпуска

if(document.querySelector('.section-content__swiper')) {
  const swiperForm = new Swiper('.section-content__swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".section-content__btn-right",
      prevEl: ".section-content__btn-left"
    },
  
    breakpoints: {
      768: {
        spaceBetween: 18,
        slidesPerView: 3,
      },
      993: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1201: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
    },
  });
}


// Слайдер Карточка

if(document.querySelector('.section-card__prev-swiper')) {
  const swiperPrev = new Swiper(".section-card__prev-swiper", {
    //loop: true,
    spaceBetween: 12,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".section-card__btn-right",
    },
  
  });

  const swiperCard = new Swiper(".section-card__main-swiper", {
    //loop: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiperPrev
    }
  });
}


// Показать все филиалы

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".block-count__card").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".block-count__item-fil");
      let btnArrow = this.querySelector(".block-count__right-btn")
      
      document.querySelectorAll(".block-count__card").forEach(el => {
        if (el != btn) {
          el.classList.remove("block-count__card__active");
        };
      });
      
      document.querySelectorAll(".block-count__item-fil").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("block-count__item-fil__active");
        };
      });
      dropdown.classList.toggle("block-count__item-fil__active");
      btn.classList.toggle("block-count__card__active");
      btnArrow.classList.toggle("block-count__right-btn__active")
    });
  });
});


// Показать таблицу в поиске

document.addEventListener('DOMContentLoaded', function() {
  let fils = document.querySelectorAll(".section-search__btn-count")

  for(fil of fils) {
    fil.addEventListener('click', function() {
      let parent = this.closest('.section-search__card-fil');
      let table = parent.querySelector('.section-search__table-fil');

      if(table.style.display === 'none') {
        table.style.display = "inline-table";
      } else {
        table.style.display = "none";
      };
    })
  }
})  


// Добавить препарат

function addFilter() {
  let filterWrap = document.querySelector(".section-search__select-wrap")
  let filterHidden = document.querySelector(".section-search__select-hidden")

  filterWrap.append(filterHidden)
  filterHidden.classList.add("active")
}

document.addEventListener('DOMContentLoaded', function() {
  if(document.querySelector(".section-search__btn-plus")) {
    document.querySelector(".section-search__btn-plus").addEventListener('click', event => {
      event.preventDefault()
      addFilter()
    })
  }
})  


// Фильтры

document.addEventListener('DOMContentLoaded', function() {
  if(document.querySelector('.section-search__filter-btn')) {
    document.querySelector('.section-search__filter-btn').addEventListener("click", function() {
      this.style.display === 'none'
      document.querySelector('.section-search__form').classList.add('section-search__form__active')
      document.querySelector(".section-search__filter-top").classList.add("hidden")
    })
  }
})


// Категории

document.addEventListener('DOMContentLoaded', function() {
  if(document.querySelector('.section-category__cat-btn')) {
    document.querySelector('.section-category__cat-btn').addEventListener("click", function() {
      
      document.querySelector('.section-category__left').classList.toggle('section-category__left__active')
    })
  }
})

// Все статьи

document.addEventListener('DOMContentLoaded', function() {
  if(document.querySelector('.section-articleMain__art-btn')) {
    document.querySelector('.section-articleMain__art-btn').addEventListener("click", function() {
      this.classList.toggle('section-articleMain__art-btn__active')
      
      document.querySelector('.section-articleMain__left').classList.toggle('section-articleMain__left__active')
    })
  }
})


// Слайдер Аналоги

if(document.querySelector('.block-analogue__swiper')) {
  const swiperAnalogue = new Swiper('.block-analogue__swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".block-analogue__btn-right",
      prevEl: ".block-analogue__btn-left"
    },
  
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 3.3,
      },
      993: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1201: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
    },
  });
}


// Форма отзывы

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.section-tab__review-btn')) {
    document.querySelector('.section-tab__review-btn').addEventListener("click", event => {
      event.currentTarget.classList.add('section-tab__review-btn__hidden')
      document.querySelector('.review-block__form').classList.add('review-block__form__active')
    })
  
    document.querySelector('.review-block__close-btn').addEventListener("click", event => {
      event.preventDefault()
      document.querySelector('.review-block__form').classList.remove('review-block__form__active')
      document.querySelector('.section-tab__review-btn').classList.remove('section-tab__review-btn__hidden')
    })
  }
})

// Форма вопрос

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.section-tab__question-btn')) {
    document.querySelector('.section-tab__question-btn').addEventListener("click", event => {
      event.currentTarget.classList.add('section-tab__question-btn__hidden')
      document.querySelector('.question-block__form').classList.add('question-block__form__active')
    })
  
    document.querySelector('.question-block__close-btn').addEventListener("click", event => {
      event.preventDefault()
      document.querySelector('.question-block__form').classList.remove('question-block__form__active')
      document.querySelector('.section-tab__question-btn').classList.remove('section-tab__question-btn__hidden')
    })
  }
})


// Показать текст

let btnsMore = document.querySelectorAll(".btnsMore");

for(btn of btnsMore) {
  btn.addEventListener('click', function() {
    let parent = this.closest('.section-article__slide');
    let dots = parent.querySelector('.dots');
    let more = parent.querySelector('.more');

    if(dots.style.display === 'none') {
      dots.style.display = "inline";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
    };
  });
};

// Показать текст Статьи


for(btn of btnsMore) {
  btn.addEventListener('click', function() {
    let parent = this.closest('.section-category__item');
    let dots = parent.querySelector('.dots');
    let more = parent.querySelector('.more');

    if(dots.style.display === 'none') {
      dots.style.display = "inline";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      more.style.display = "inline";
    };
  });
};


// Бургер-меню 

document.querySelector(".header-burger").addEventListener("click", function() {
  this.classList.toggle("close")
  document.querySelector(".header-mobile__burger-menu").classList.toggle("active");
  document.querySelector("#scroll").classList.toggle("body-scroll")
});

document.querySelector(".header-mobile__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
  document.querySelector("#scroll").classList.toggle("body-scroll")
}); 


document.addEventListener('DOMContentLoaded', () => {

  let checkboxAll = document.querySelectorAll('.block-count__input-check');
  for (checkbox of checkboxAll) {
    checkbox.addEventListener('click', function()
    {
    	let parent = this.parentNode;
    	
    	( !parent.classList.contains('active') ) ?
    			parent.classList.add('active'):
    			parent.classList.remove('active');

      document.querySelector(".block-count__form-btn").addEventListener("click", function() {
        parent.classList.remove('active');
      })
    });
  }
});

// Слайдер партнеры

const swiperPartner = new Swiper('.section-partners__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  
  navigation: {
    nextEl: ".section-partners__btn-right",
    prevEl: ".section-partners__btn-left"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 20,
      slidesPerView: 2.4,
    },
    993: {
      spaceBetween: 22,
      slidesPerView: 5,
    },
    1201: {
      spaceBetween: 189,
      slidesPerView: 4.5,
    },
  },
});


// Куки

var delay_popup = 5000;
setTimeout("document.getElementById('overlay').style.display='flex'", delay_popup);

document.getElementById('popupClose').addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('overlay').style.display='none'
})


// Карта Главная

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      center: [55.736935, 37.516009],
      zoom: 14,
      controls: [],
      
  },
  {  
    autoFitToViewport: 'always',
    searchControlProvider: 'yandex#search'
  });

  var myPlacemark = new ymaps.Placemark([55.747950, 37.501246], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker-map.svg',
    iconImageSize: [45, 60],
    iconImageOffset: [-3, -42]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

};



