const partnersBtn = document.getElementsByClassName("partners-btns")[0];
const partnersContent = document.getElementsByClassName("partners-content");
partnersBtn.addEventListener("click",partnerClick);

function partnerClick (e) {
    const number = e.target.dataset.id;
    for(let i = 0; i < partnersContent.length; i++) {
        if(number !== undefined){
            if(partnersContent[i].dataset.id == number) {
                partnersContent[i].classList.add("partners-content-active");
            }
            else {
                partnersContent[i].classList.remove("partners-content-active");
            }
        }
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 20,
    slidesPerView: 1.2,
    slidesPerGroup: 3,
    slideToClickedSlide: false,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> Team ' + (index + 1) + '</span>';
      }
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        1561: {
          centeredSlides: false,
          slidesPerView: 3.2,
          slidesPerGroup: 3,
          spaceBetween: 20
        },

        1260: {
            centeredSlides: false,
            slidesPerView: 2,
            slidesPerGroup: 3,
            spaceBetween: 20
        },
      }
  });

const modal = document.getElementsByClassName('modal')[0];
const modalWrap = document.getElementsByClassName('modal__wrap')[0];

const buttons = document.querySelectorAll('.slider-preview__btn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', callModal)
})

const closeBtns = document.getElementsByClassName('modal-close');
for (let i = 0; i < closeBtns.length;i++) {
  closeBtns[i].addEventListener('click', event => {
    modalWrap.classList.remove('modal__wrap-active');
    setTimeout(transForm,300);
  })
}

function callModal() {
    modal.style.transform = 'scale(1)';
    modalWrap.classList.add('modal__wrap-active');
  }

  function transForm() {
    modal.style.transform = 'scale(0)';
}

const burger = document.getElementsByClassName('burger')[0];
const menu = document.getElementsByClassName('menu')[0];
burger.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (window.innerWidth < 851) {
    burger.classList.toggle('burger-active');
    menu.classList.toggle('menu-active');
    document.body.classList.toggle('body-noscroll');
  }
}