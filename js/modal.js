import blockedScroll from './blockedScroll.js';

const {offScroll, onScroll} =  blockedScroll;

export default function modal() {
    const moreElems = document.querySelectorAll('.more');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
        offScroll();
    };
    
    const closeModal = () => {
        modalElem.classList.add('hidden');
        onScroll();
    };

    moreElems.forEach(elem => {
        elem.addEventListener('click', openModal);
    });
    
    modalElem.addEventListener('click', (event) => {
        const target = event.target;
    
        if (target.classList.contains('overlay') ||
            target.classList.contains('modal__close')) {
            closeModal();
        }
    });
}
