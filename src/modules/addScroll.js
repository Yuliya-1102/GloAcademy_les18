const addScroll = () => {
    const menu = document.querySelector('menu');
    const menuList = menu.querySelectorAll('ul>li>a');
    const container = document.querySelectorAll('.container');
    const serviceBlockBtn = document.querySelector('a[href*="#service-block"]');
    const service = document.querySelector('.service');

    menuList.forEach((elem) => {
        let linkHref = elem.hash.slice(1);
        elem.addEventListener('click', () => {
            container.forEach((item) => {
                if(linkHref === item.parentElement.className){
                    item.scrollIntoView({block: "start", behavior: "smooth"});
                }
            });
        });
    });

    serviceBlockBtn.addEventListener('click', () => {
        service.scrollIntoView({block: "start", behavior: "smooth"});
    });
};

export default addScroll;