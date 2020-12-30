    'use strict';

    import countTimer from './modules/countTimer';
    import toggleMenu from './modules/toggleMenu';
    import togglePopUp from './modules/togglePopUp';
    import addScroll from './modules/addScroll';
    import tabs from './modules/tabs';
    import slider from './modules/slider';
    import changePhotoCommand from './modules/changePhotoCommand';
    import inputNumbers from './modules/inputNumbers';
    import calc from './modules/calc';
    import sendForm from './modules/sendForm';




    //timer
    countTimer();
    //меню
    toggleMenu();
    // popup
    togglePopUp();
    // плавный скролл
    addScroll();
    //табы, делегирование
    tabs();
    // слайдер
    slider();
    //менять фото на наведению
    changePhotoCommand();
    //ввод только цифр в калькулятор
    inputNumbers();
    // калькулятор
    calc(100);
    //send-ajax-form
    sendForm();

