const changePhotoCommand = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
     
        commandPhoto.forEach((elem) => {
            let targetSrc;
            let targetDataset;
            elem.addEventListener('mouseenter', (event) => {
                let target = event.target;
                targetSrc = target.src;
                targetDataset = target.dataset.img;

                target.src = targetDataset;
                target.dataset.img = targetSrc;
            });
            elem.addEventListener('mouseleave', (event) => {
                let target = event.target;

                target.src = targetSrc;
                target.dataset.img = targetDataset;
            });
        });
 };

 export default changePhotoCommand;