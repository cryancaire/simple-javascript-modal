let modals = document.querySelectorAll('modal');

let openButtons = document.querySelectorAll('[class^="__modal-"]');

//set up some defaults
let defaultTitleText = "Dialog";
let defaultWidth = '30vw';
let defaultHeight = '10vh';

modals.forEach(modal => {
    let overlayClose = modal.dataset.overlayClose;
    let overlayEscape = modal.dataset.overlayEscape;
    let modalTitle = modal.dataset.title;
    let modalId = modal.id;
    let modalContent = modal.innerHTML;
    let modalWidth = modal.dataset.modalWidth;
    let modalHeight = modal.dataset.modalHeight;

    console.log(modalWidth)
    
    let newModalContainer = document.createElement('div');
    newModalContainer.classList.add('__modal-container');
    newModalContainer.id = `__modal_${modalId}`;

    let newModalTitleDiv = document.createElement('div');
    newModalTitleDiv.classList.add('__modal-titleDiv');

    let newModalTitleSpan = document.createElement('span');
    newModalTitleSpan.classList.add('__modal-title-span');
    newModalTitleSpan.innerHTML = modalTitle || defaultTitleText;

    let newModalCloseSpan = document.createElement('span');
    newModalCloseSpan.classList.add('__modal-close-span');
    newModalCloseSpan.innerHTML = '&times';

    let newModalContentDiv = document.createElement('div');
    newModalContentDiv.classList.add('__modal-content');
    newModalContentDiv.style.height = modalHeight || defaultHeight;
    newModalContentDiv.innerHTML = modalContent;

    let newModalInnerContainer = document.createElement('div');
    newModalInnerContainer.classList.add('__modal-innerContainer');
    newModalInnerContainer.style.width = modalWidth || defaultWidth;

    newModalCloseSpan.addEventListener('click', e => {
        let modalToClose = document.querySelector(`div[id=__modal_${modalId}]`);
        modalToClose.classList.remove('__modal-active');
    });

    if (overlayClose === 'true') {
        newModalContainer.addEventListener('click', e => {
            let modalToClose = document.querySelector(`div[id=__modal_${modalId}]`);
            if (e.target.id === `__modal_${modalId}`) {
                modalToClose.classList.remove('__modal-active');
            }
        });
    }

    if (overlayEscape === 'true') {
        document.addEventListener('keyup', e => {
            let modalToClose = document.querySelector(`div[id=__modal_${modalId}]`);
            if (e.key === 'Escape' || e.keyCode === '27') {
                modalToClose.classList.remove('__modal-active');
            }
        });
    }

    newModalTitleDiv.appendChild(newModalTitleSpan);
    newModalTitleDiv.appendChild(newModalCloseSpan);
    newModalContainer.append(newModalInnerContainer);
    newModalInnerContainer.append(newModalTitleDiv);
    newModalInnerContainer.append(newModalContentDiv);
    document.body.append(newModalContainer);
});

openButtons.forEach(button => {
    let modalId = button.dataset.modalId;
    let modalToOpen = document.querySelector(`div[id=__modal_${modalId}]`);
    
    button.addEventListener('click', e => {
        modalToOpen.classList.add('__modal-active');
    });
});