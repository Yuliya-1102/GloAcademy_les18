const slider = () => {
    const slider = document.querySelector('.portfolio-content');
    const slide = document.querySelectorAll('.portfolio-item');
    const btn = document.querySelectorAll('.portfolio-btn');
    const portfolioDots = document.querySelector('.portfolio-dots');

    let currentSlide = 0; //номер слайда, нулевой
    let interval; // служит как id для отключения setIntervala
    let dot; //document.querySelectorAll('.dot') внутри функции

    //создание dots в количестве слайдов
    const addDots = () => {
        slide.forEach((item, index) => {
            let li = document.createElement('li');
            li.classList.add('dot');
            if(index === 0){
                li.classList.add('dot-active');
            }
            portfolioDots.append(li);
        });
        dot = document.querySelectorAll('.dot');
    };
    addDots();

    const prevSlide = (elem, index, strClass) => { // удаляет класс active
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => { // добавляет класс active
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active'); // перелистываем слайд, удаляя и добавляя класс с opasity;
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active'); // перелистываем слайд, удаляя и добавляя класс с opasity;
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    // останавливать автоматическое переключение при наведении
    const stopSlide = () => {
        clearInterval(interval);
    };

    // переключени слайдера по стрелкам
    slider.addEventListener('click', (event) => { 
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active'); //удаляем активные классы
        prevSlide(dot, currentSlide, 'dot-active'); //удаляем активные классы
        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if(target.matches('#arrow-left')){
            currentSlide--;
        } else if(target.matches('.dot')){
            dot.forEach((elem, index) => {
                if(elem === target){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length -1; //длинна массива на 1ед больше, чем интдекс массива
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active'); //добавляе активные классы, currentSlide, кот выше просчитали
        nextSlide(dot, currentSlide, 'dot-active');//добавляе активные классы, currentSlide, кот выше просчитали
    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            startSlide(1500);
        }
    });

    startSlide(1500);

};

export default slider;