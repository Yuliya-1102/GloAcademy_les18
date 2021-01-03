const changePhotoCommand = () => {
    const command = document.querySelector('.command');
     
            let targetSrc;
            let targetDataset;
            command.addEventListener('mouseover', (event) => {
                let target = event.target;

                if(target.classList.contains('command__photo')){
                    targetSrc = target.src;
                    targetDataset = target.dataset.img;

                    target.src = targetDataset;
                    target.dataset.img = targetSrc;
                }
                
            });
            command.addEventListener('mouseout', (event) => {
                let target = event.target;
                if(target.classList.contains('command__photo')){
                    target.src = targetSrc;
                    target.dataset.img = targetDataset;
                }
            });

};

 export default changePhotoCommand;