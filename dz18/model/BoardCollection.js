class BoardCollection {
    #api = null;
    list = [];
    constructor(){
        this.#api = new RestApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/')
    }

    fetchList(){
        return this.#api.getList().then((data => this.list = data));
    }

    
    delete(id) {
        return this.#api.delete(id).then(() => {
            this.list = this.list.filter((item) => item.id !== id);
        });
    }
    add(data) {
        return this.#api.create(data).then((createItem) => {
            this.list = [...this.list, createItem];
        });
    }
    update(id, newValue) {
        const item = this.list.find((item) => item.id === id);
        const updatedItem = {
            ...item,
            ...newValue,
        };

        return this.#api.update(updatedItem).then(() => {
            this.list = this.list.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );
        });
    }
}