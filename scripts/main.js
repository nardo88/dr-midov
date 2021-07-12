document.addEventListener('DOMContentLoaded', () => {

    const menu = () => {
        const header = document.querySelector('.header')
        const nav = document.querySelector('.nav')

        const closeMenu = () => nav.classList.remove('nav__open')

        header.addEventListener('click', e => {
            const target = e.target;


            if (target.closest('.burger')) {
                nav.classList.add('nav__open')
            }

            if (target.classList.contains('nav__close')) {
                closeMenu()

            }
        })
    }


    menu()



    const tabsOperations = () => {
        const operationTop = document.querySelectorAll('.operation__top')
        const operationBottom = document.querySelectorAll('.operation__bottom')

        const secondHide = () => {
            operationBottom.forEach(item => {
                item.style.maxHeight = '0px'
                item.classList.remove('active')
            })
        }


        operationTop.forEach((item, i) => {
            item.addEventListener('click', e => {
                const target = item.nextElementSibling
                const child = target.childNodes[1]

                if (target.classList.contains('active')) {
                    secondHide()
                } else {
                    secondHide()
                    target.classList.add('active')
                    target.style.maxHeight = child.offsetHeight + 'px'

                }
            })
        })

    }


    tabsOperations()



    const slider = () => {
        let mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.gallery__next',
                prevEl: '.gallery__prev'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,

                },

                760: {
                    slidesPerView: 2,

                },
            }
        })
    }

    slider()


    const filter = () => {
        const filterList = document.querySelector('.filter__list')
        const filter = document.querySelector('.filter')

        const openFilterItems = () => {
            filterList.classList.toggle('filter__list--open')
        }

        filter.addEventListener('click', e => {
            const target = e.target
            if(target.closest('.filter__burger')){
                openFilterItems()
            }

            
        })
    }

    filter()
})