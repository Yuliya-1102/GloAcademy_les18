const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content');
    const service = document.querySelector('.service');
    //анимация
    function animate({duration, draw, timing}) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) {
              timeFraction = 1;
            }
          let progress = timing(timeFraction);
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
      }

    // использование анимации
    service.addEventListener('click', (event) => {
        const target = event.target;
        if(target.classList.contains('popup-btn')){
            let clientWidth = document.documentElement.clientWidth;
            if(clientWidth > 768){
                popup.style.display = 'block';
                animate({
                    duration: 1000,
                    timing: function(timeFraction) {
                    return timeFraction;
                    },
                    draw: function(progress) {
                        popupContent.style.left = (progress * 50) + '%';
                        popupContent.style.transform = 'translateX(-50%)';
                    }
                });                        
            } else{
                popup.style.display = 'block';
            }
        }
    });

    // закрытие окна
    popup.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else{
            target = target.closest('.popup-content');

            if(!target){
                popup.style.display = 'none';
            }
        }
    });
};


export default togglePopUp;