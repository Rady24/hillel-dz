class BoardController{
    boardCollection = null;
    boardView = null;
    headerView = null;
    constructor(container){
        

        this.headerView = new HeaderView({
            onAdd: this.add,
        });
        container.append(this.headerView.el);
        this.boardView = new BoardView({
            onDelete: (id) => this.delete(id),
            onUpdate: this.update,
        });
        container.append(this.boardView.el);

        this.boardCollection = new BoardCollection();
        this.boardCollection.fetchList().then(() => this.boardView.renderList(this.boardCollection.list));
    }

    
    delete(id){
        this.boardCollection.delete(id)
        .then(() =>
        this.boardView.renderList(this.boardCollection.list));
    }    
    add = (data) => {
        this.boardCollection
            .add(data)
            .then(() =>
                this.boardView.renderList(this.boardCollection.list)
            );
    };
    update = (id, newValue) => {
        this.boardCollection.update(id, newValue).then(() => {
            this.boardView.renderList(this.boardCollection.list);
        });
    };
}