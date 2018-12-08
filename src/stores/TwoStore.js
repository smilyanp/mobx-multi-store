import { observable } from "mobx";

class TwoStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable available = ['one', 'two'];
    
}

export default TwoStore;