const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square'); 
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;

        const typeValue = calcType.options[calcType.selectedIndex].value;//получили select и ч-з м-д .options нашли св-ва а потом индекс
        const squareValue = +calcSquare.value;

        if(calcCount.value > 1){
            countValue += (calcCount.value - 1) / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if(calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        } 

        if(typeValue && squareValue){
            total = price * squareValue * typeValue * countValue * dayValue;
        }

        //скорость расчета калькулятора
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
        function speedCalc() {
            let count = 0;
            animate({
                duration: 500,
                timing: function(timeFraction) {
                    return timeFraction;
                },
                draw: function(progress) {
                    if(count < total){
                        count++;
                        totalValue.textContent = Math.floor(progress * total);
                    }
                }
            });
        }
        speedCalc();
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;

        if(target.matches('select') || target.matches('input')){
            countSum();
        }
        
    });
};

export default calc;