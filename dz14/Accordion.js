class Accordion {
    static CLASSES = {
        TITLE: 'acc-title',
        ACTIVE: 'acc-body-active',
    }
    static SELECTORS = {
        TITLE: '.acc-title',
    }
    #el = null;

    constructor(el){
        this.#el = el;
        this.#bindEventListener();
    }
    

    #bindEventListener() {
        this.#el.addEventListener('click', (e) => {
            if(e.target.classList.contains(Accordion.CLASSES.TITLE)) {
                e.target.closest(Accordion.SELECTORS.TITLE).nextElementSibling.classList.
                toggle(Accordion.CLASSES.ACTIVE);
            };
        })
    }
    

}
