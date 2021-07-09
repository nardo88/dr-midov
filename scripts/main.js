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
})