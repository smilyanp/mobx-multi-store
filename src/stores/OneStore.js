import { observable } from 'mobx';

class OneStore {

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @observable isLoading = true;

}

export default OneStore;