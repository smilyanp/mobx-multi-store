import { observable, computed } from "mobx";

class TwoStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable available = ['one', 'two'];
    @computed get fromStoreOne () {
        return this.rootStore.oneStore.isLoading;
    }

}

export default TwoStore;