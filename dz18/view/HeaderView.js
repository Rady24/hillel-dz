class HeaderView {
    static CLASSES = {
        ADD_BTN_CLASS: 'header__btn',
    }
    static headerTemplate = `
    <header class="header">
        <div class="header-wrap">
            <div class="header__title">This is my Sticker Board</div>
            <button class="header__btn">ADD NEW</button>
        </div>
    </header>`
    el = null;
    #config = null;
    
    constructor(config){
        this.#config = config;
        this.#initView();
        
    }
    #initView(){
        this.el = htmlToElement(HeaderView.headerTemplate);
        
        this.el.addEventListener('click', (e) =>{
            if (e.target.classList.contains(HeaderView.CLASSES.ADD_BTN_CLASS)){
                const obj ={
                    description:'',
                }
                this.#config.onAdd(obj);
            }
        });
    }
}