document.addEventListener('DOMContentLoaded', () => {
    
    const menu = () => {
        const header = document.querySelector('.header')
        const nav = document.querySelector('.nav')

        const closeMenu = () => nav.classList.remove('nav__open')

        header.addEventListener('click', e => {
            const target = e.target;


            if(target.closest('.burger')){
                nav.classList.add('nav__open')
            }

            if(target.classList.contains('nav__close')){
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

                if(target.classList.contains('active')) {
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
})