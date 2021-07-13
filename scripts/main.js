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



    let mySwiper = new Swiper('.swiper-container', {
        allowTouchMove: false,
        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true

            },

            760: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
        }
    })



    const filter = () => {
        const filterList = document.querySelector('.filter__list')
        const filter = document.querySelector('.filter')
        const sliderWrapper = document.querySelector('.slider__wrapper')

        const base = [{
                id: 1,
                name: 'abdominoplasty',
                path: './img/gallery/AB1.jpg'
            },
            {
                id: 2,
                name: 'abdominoplasty',
                path: './img/gallery/AB2.jpg'
            },
            {
                id: 3,
                name: 'blepharoplasty',
                path: './img/gallery/BF1.jpg'
            },
            {
                id: 4,
                name: 'blepharoplasty',
                path: './img/gallery/BF2.jpg'
            },
            {
                id: 5,
                name: 'blepharoplasty',
                path: './img/gallery/BF3.jpg'
            },
            {
                id: 6,
                name: 'liposuction',
                path: './img/gallery/LIPO.jpg'
            },
            {
                id: 7,
                name: 'liposuction',
                path: './img/gallery/LIPO2.jpg'
            },
            {
                id: 8,
                name: 'liposuction',
                path: './img/gallery/LIPO3.jpg'
            },
            {
                id: 9,
                name: 'mamoplastic',
                path: './img/gallery/MM1.jpg'
            },
            {
                id: 10,
                name: 'mamoplastic',
                path: './img/gallery/MM2.jpg'
            },
        ]

        const openFilterItems = () => {
            filterList.classList.toggle('filter__list--open')
        }

        const render = data => {
            mySwiper.destroy(true, true)


            sliderWrapper.innerHTML = '';
            data.forEach(item => {
                const elem = document.createElement('div')
                elem.className = 'slider__item swiper-slide';
                elem.innerHTML = `<img src=${item.path} alt="slide">`
                sliderWrapper.insertAdjacentElement('beforeend', elem)
            })

            mySwiper = new Swiper('.swiper-container', {
                allowTouchMove: false,
                navigation: {
                    nextEl: '.gallery__next',
                    prevEl: '.gallery__prev'
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true,
                        allowTouchMove: true,
        
                    },
        
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 20,
        
                    },
                }
            })
        }

        render(base)

        filter.addEventListener('click', e => {

            e.preventDefault()


            const target = e.target
            if (target.closest('.filter__burger')) {
                openFilterItems()
            }

            if (target.classList.contains('filter__btn')) {
                // закрываем меню
                filterList.classList.remove('filter__list--open')

                if (target.dataset.type === 'all') {
                    render(base)

                    return
                } else {

                    const newData = base.filter(item => item.name === target.dataset.type)
                    if (newData.length) {
                        render(newData)
                    }
                }
            }
        })


        window.addEventListener('resize', () => {
            render(base)
        })
    }

    filter()




    const info = () => {
        const acardeonTop = document.querySelectorAll('.acardeon__top')
        const acardeonBottom = document.querySelectorAll('.acardeon__bottom')

        const secondHide = () => {
            acardeonBottom.forEach(item => {
                item.style.maxHeight = '0px'
                item.classList.remove('active')
            })
        }


        acardeonTop.forEach((item, i) => {
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

    info()
})