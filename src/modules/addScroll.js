const addScroll = () => {
    const menu = document.querySelector('menu');
    const container = document.querySelectorAll('.container');
    const serviceBlockBtn = document.querySelector('a[href*="#service-block"]');
    const service = document.querySelector('.service');

    
    menu.addEventListener('click', (event) => {
        const target = event.target;
        if(target.matches('a')){
            let linkHref = target.hash.slice(1);
            container.forEach((item) => {
                if(linkHref === item.parentElement.className){
                    item.scrollIntoView({block: "start", behavior: "smooth"});
                }
            });
        }
    });
    
    serviceBlockBtn.addEventListener('click', () => {
        service.scrollIntoView({block: "start", behavior: "smooth"});
    });
};

export default addScroll;