const sendForm = () => {
    const errorMessage = 'Что-то пошло не так';
    const successMesage = 'Спасибо, мы скоро с вами свяжемся';
    const form = document.querySelectorAll('form');
    const arrForm = [...form];
    const popup = document.querySelector('.popup');
    
    //создали сообщение
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('sk-rotating-plane');
    statusMessage.style.cssText = 'font-size: 2rem';
    statusMessage.style.color = '#fff';


    document.querySelector('body').addEventListener('submit', (event) => {
        let target = event.target;
        event.preventDefault();

        if(target.matches('form')){
            target.appendChild(statusMessage);
            const formData = new FormData(target); //перед отправкой, получаем данные с формы input c атрибут name в объект
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body)
                .then((response) => { //resolve, передаются callback в Promise(resolve, reject), данные response
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }
                    statusMessage.classList.remove('sk-rotating-plane');
                    statusMessage.textContent = successMesage;
                    clearForm();

                    setTimeout(function(){
                        statusMessage.textContent = '';
                        if(target.matches('#form3')){
                            popup.style.display = 'none';
                        }
                    }, 2000);
                })
               .catch((error) => { //reject, передаются callback в Promise(resolve, reject)
                    statusMessage.classList.remove('sk-rotating-plane');
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        }
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

     //очистка формы
    const clearForm = () => {
        arrForm.forEach(elem => {
            let elementForm = [...elem.elements].filter(item => {
                return item.tagName.toUppercase !== 'button' &&
                item.type !== 'button';
            });
            elementForm.forEach(item => {
                item.value = '';
            });
        }); 
    };

    //валидация форм
    const validForm = () => {
        document.querySelector('body').addEventListener('input', (event) => {
            const target = event.target;
            if(target.type === 'tel'){
                target.value = target.value.match(/\+?\d{1,13}/);
            } else if(target.type === 'text' && target.id !== 'form2-message'){
                target.value = target.value.match(/[а-яё]+/gi);
            } else if(target.id === 'form2-message'){
                target.value = target.value.match(/([а-яё0-9 .,!?;])+/gi);
            }
        });
    };
    validForm();
};

export default sendForm;