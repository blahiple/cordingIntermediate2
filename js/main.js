// Header
var header = $(".header");
var scrollTop = $(".header__to-top");

$('.scroll__point').waypoint({
  handler: function (direction) {
    //ヘッダーBG 表示・非表示
    if (direction === 'down') {
      header.addClass("header--bg");
    } else if (direction === 'up') {
      header.removeClass("header--bg");
    }

    //トップへ戻るボタン 表示・非表示
    if (direction === 'down') {
      scrollTop.fadeIn();
    } else if (direction === 'up') {
      scrollTop.fadeOut();
    }
  },
  offset: '60%',
});

//トップへ戻る
scrollTop.on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// Our Trainer
$('#smarttab').smartTab({
  enableUrlHash: false,
});

// Studio
const studioSwiper = new Swiper('.studio__swiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  breakpoints: {
    1025: {
      spaceBetween: 165,
    },
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Price
$(document).ready(function() {
  $(".price__scroll").on("scroll", function() {
    handleScroll();
  });

  function handleScroll() {
    const $scrollContainer = $(".price__scroll");
    const $fadeOutElements = $(".price__arrow");

    const scrollPosition = $scrollContainer.scrollLeft();
    const threshold = 20; // ここで指定したスクロール量でクラスを追加

    if (scrollPosition > threshold) {
      $fadeOutElements.addClass("price__arrow--hide");
    }
  }
});

//FAQ
$(document).ready(function () {
  $(".faq__accordion-bottom").hide()
  $(".faq__accordion-top").on("click", function () {
    $(this).next().slideToggle();
    $(this).closest('.faq__accordion').find('.faq__accordion-icon').toggleClass("faq__accordion-icon--active");
  })
});

//Animation Curtain
$('.mvisual__title-anim').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('anim__curtain');
    }
  },
  offset: '50%',
});

$('.mvisual__title-bg').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('anim__fadeIn');
    }
  },
  offset: '50%',
});

// Fade In
$('.fade__in.animate__animated').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeIn');
    }
  },
  offset: '50%',
});

$('.fade__in--up.animate__animated').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
    }
  },
  offset: '90%',
});

