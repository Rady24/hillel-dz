class BoardView {
    static CLASSES = {
        STICKER_ITEM_CLASS: 'board__item',
        TEXT_AREA_CLASS: 'board__item-sticker',
        DELETE_BTN_CLASS: 'board__item-label-span',
    }
    static boardContainerTemplate = `
    <section class="board">
            <div class="board-wrap"></div>
        </section>` ;
    static boardItemTemplate = `
        <div class="board__item" data-sticker-id="{{id}}">
                    <label class="board__item-label" for="Delete">
                        <span class="board__item-label-span">X</span>
                    </label>
                    <textarea class="board__item-sticker" rows="10" cols="30">{{description}}</textarea>
                </div>` ;
    el = null;
    #config = null;

    static generateBoardItemHtml(item) {
        return interpolate(BoardView.boardItemTemplate,item);
    }
    static getItemId(el) {
        return el.closest('.'+ BoardView.CLASSES.STICKER_ITEM_CLASS).dataset.stickerId;
    }

    constructor(config){
        this.#config = config;
        this.#initView();
        
    }
    #initView(){
        this.el = htmlToElement(BoardView.boardContainerTemplate);

        this.el.addEventListener('change', (e) =>{
            if (e.target.classList.contains(BoardView.CLASSES.TEXT_AREA_CLASS)){
                const itemId = BoardView.getItemId(e.target);
                this.updateItem(itemId, e.target.value);
            }
        });
        this.el.addEventListener('click', (e) =>{
            if (e.target.classList.contains(BoardView.CLASSES.DELETE_BTN_CLASS)){
                const itemId = BoardView.getItemId(e.target);
                this.deleteItem(itemId);
                
            }
        });
        
    }
    renderList(list){
        this.el.children[0].innerHTML = list.map(BoardView.generateBoardItemHtml)
        .join('');
    }
    deleteItem(id){
        this.#config.onDelete(id);   
    }
    updateItem(id, newValue){
        this.#config.onUpdate(id,{description:newValue});
    }
}