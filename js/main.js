(function () {

    // // Бургер

    // document.addEventListener('click', burgerInit)

    // function burgerInit(e) {
    //     const burger = e.target.closest('.burger')
    //     const burgerNavLink = e.target.closest('.nav__link')

    //     if (!burger && !burgerNavLink) return
    //     if (document.documentElement.clientWidth > 900) return

    //     if (!document.body.classList.contains('body--opened-menu')) {
    //         document.body.classList.add('body--opened-menu')
    //     } else {
    //         document.body.classList.remove('body--opened-menu')
    //     }
    // }

    // Телефон

    // function closeNav() {
    //     document.getElementById("header__number").style.width = "0%";
    // }

    // document.addEventListener('click', closeNav)
    

    // Модалка

    const btns = document.querySelectorAll('.button')
    const modal = document.querySelector('.modal')
    const body = document.body

    const openModal = () => {
        modal.classList.add('modal--open')
        body.classList.add('body--opened-modal')
    }

    const closeModal = () => {
        modal.classList.remove('modal--open')
        body.classList.remove('body--opened-modal')
    }

    btns.forEach(el => {

        el.addEventListener('click', openModal)

        modal.addEventListener('click', event => {
            const target = event.target
            if (target.classList.contains('modal') || target.closest('.modal__cancel')) {
                closeModal()
            }
        })
    
        document.addEventListener('keydown', event => {
            if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
                closeModal()
            }
        })
    });

    


    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened')
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        })
    });

    // Слайдер-объявления
    new Swiper('.advertisement__slider', {

        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,

        navigation: {
            nextEl: '.advertisement__next',
            prevEl: '.advertisement__prev',
        },

        breakpoints: {
            901: {
                slidesPerView: 2,
            },
            1201: {
                slidesPerView: 2.2,
            }
        }

    });


    // Слайдер-вакансии
    new Swiper('.vacancy__slider', {

        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,

        navigation: {
            nextEl: '.vacancy__next',
            prevEl: '.vacancy__prev',
        },

        breakpoints: {
            901: {
                slidesPerView: 2,
                spaceBetween: 32,
            },
            1201: {
                slidesPerView: 2.2,
            }
        }

    });


    // Маска для телефона
    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)
})()

