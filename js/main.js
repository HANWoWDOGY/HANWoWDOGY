/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});
*/
$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on("click", function() {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  })

  var next = $(".projects__swiper-button-next");
  var prev = $(".projects__swiper-button-prev");
  var bullets = $(".projects__swiper-pagination")

  next.css("left", prev.width() + 40 + bullets.width() + 40)
  bullets.css("left", prev.width() + 40)

  new WOW().init();

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      }, 
      userPhone: "Укажите ваш номер телефона",
      userEmail: {
        required: "Укажите ваш email ",
        email: "Пример: name@domain.com"
      }
    }
  
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userQuestion: {
        required: true,
        minlength: 20
      }
    },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      }, 
      userPhone: "Укажите ваш номер телефона",
      userQuestion: {
        required: "Укажите ваш вопрос ",
        question: "Введите не менее 20 символов"
      }
    }
  
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",

      },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      }, 
      userPhone: "Укажите ваш номер телефона",
      
    }

  });


  //маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: '+7(___) ___-__-__'});

});