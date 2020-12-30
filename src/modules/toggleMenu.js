const toggleMenu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handlerMenu = () => {
       menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
            if(target.closest('.menu')){
                handlerMenu();
            } else if(target.classList.contains('close-btn')){
                handlerMenu();
            } else if(target.closest('menu') && !target.classList.contains('active-menu')){
                handlerMenu();
            } else if(target.classList.contains('active-menu')){
                menu.classList.add('active-menu');
            } else{
                menu.classList.remove('active-menu');
            }
    });
};

export default toggleMenu;