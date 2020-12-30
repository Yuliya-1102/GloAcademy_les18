const sendForm = () => {
    const errorMessage = 'Что-то пошло не так';
    const successMesage = 'Спасибо, мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form');
    const arrForm = [...form];
    
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('sk-rotating-plane');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.color = '#fff';

    arrForm.forEach(elem => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();

            elem.appendChild(statusMessage);
            const formData = new FormData(elem); //перед отправкой, получаем данные с формы input c атрибут name в объект
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => { //resolve, передаются callback в Promise(resolve, reject), данные response
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }
                    console.log(response);
                    statusMessage.classList.remove('sk-rotating-plane');
                    statusMessage.textContent = successMesage;
                })
               .catch((error) => { //reject, передаются callback в Promise(resolve, reject)
                    statusMessage.classList.remove('sk-rotating-plane');
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            //очистка формы
            let elementForm = [...elem.elements].filter(item => {
                return item.tagName.toUppercase !== 'button' &&
                item.type !== 'button';
            });
            elementForm.forEach(item => {
                item.value = '';
            });

         });
    });

    const postData = (body) => {
        return fetch('./server.php', { //второй параметр у fetch
            method: 'POST', //по умолчанию GET
            headers: {
                'Content-Type': 'application/json'//свойство и значение
            },
            body: JSON.stringify(body) // данные с формы input c атрибут name в объект
        }); //возвращает промис, а выше мы его обработали
    };

    //валидация форм
    const validForm = () => {
        arrForm.forEach(elem => {
            [...elem.elements].forEach(item => {
                item.addEventListener('input', () => {
                    if(item.type === 'tel'){
                        item.value = item.value.match(/\+?\d+/);
                    } else if(item.type === 'text' && item.id !== 'form2-message'){
                        item.value = item.value.match(/([а-яё ])+/gi);
                    } else if(item.id === 'form2-message'){
                        item.value = item.value.match(/([а-яё0-9 .,!?;])+/gi);
                    } 
                });
            });
        });
    };
    validForm();
};

export default sendForm;