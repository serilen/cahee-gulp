import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";

flsFunctions.isWebp();

; (function () {
   "use strict";
   $(document).ready(function () {

      // Меню бургер

      $("#burger_button").on('click', function (event) {
         $('body').toggleClass('un-scroll');
         $('#burger_button').toggleClass('burger-button--active');
         $('#burger_line').toggleClass('burger-button__line--active');
         $("#nav").toggleClass('nav--active');
      })

      //Плавная прокрутка к якорю
      $("body").on("click", "a", function (event) {

         //При нажатии на ссылку убираем экран меню
         if ($("#burger_button").hasClass('burger-button--active')) {
            $("#nav").removeClass('nav--active');
            $("#burger_button").removeClass('burger-button--active');
            $("#burger_line").removeClass('burger-button__line--active');
            $('body').removeClass('un-scroll');
         }
         //отменяем стандартную обработку нажатия по ссылке
         event.preventDefault();
         //забираем идентификатор бока с атрибута href
         let id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         //узнаем высоту меню от начала страницы
         let heightMenu = $(".header__wrap").outerHeight();
         //анимируем переход на расстояние - (top-height) -  за 1500 мс
         $('body,html').animate({ scrollTop: (top - heightMenu) }, 1500);
      });


      //Проверка на положение хеадера, если проскролиный, то ему активный класс
      if ($('.header').offset().top > 0) {
         $('.header').addClass('header--bg-active');
      }
      //Если скролим вниз меню делаем непрозрачным
      $(window).scroll(function () {
         if ($(window).scrollTop() > 0 && $(window).width() >= 768) {
            $('.header').addClass('header--bg-active');
         } else {
            $('.header').removeClass('header--bg-active');
         }
      });

      //стрелку подключаем на выпадающее меню
      $("#arrow").on("click", function (event) {
         $('#sub_list').toggleClass("menu-list__sub-list--active");
      })
   })

})();

