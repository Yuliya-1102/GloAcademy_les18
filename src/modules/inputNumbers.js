const inputNumbers = () => {
    const calcBlock = document.querySelector('.calc-block');

    const validInputNumber = (event) => {
        let target = event.target;
        if(target.classList.contains('calc-item')){
            target.value = target.value.replace (/\D/g, '');
        }
    };

    calcBlock.addEventListener('input', validInputNumber);
};

export default inputNumbers;