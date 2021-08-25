import { observable, computed, action, makeAutoObservable } from 'mobx';
class Store {
    constructor() {
        makeAutoObservable(this, {
            count: observable,
            double: computed,
            increase: action,
            decrease: action
        })
        this.count = 1;
    }
    get double() { return this.count * 2; }
    increase() { this.count++; }
    decrease() { this.count--; }
}

const store = new Store();
export default store;