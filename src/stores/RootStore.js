import OneStore from './OneStore';
import TwoStore from './TwoStore';

class RootStore {
    
    oneStore = OneStore;
    twoStore = TwoStore;
    
    constructor() {
        this.oneStore = new OneStore(this)
        this.twoStore = new TwoStore(this)
    }
}

export default RootStore;