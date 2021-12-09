export class Bakery {
    constructor(bakeryName) {
        this._bakeryName = bakeryName;
    }
    get bakeryName() {
        return this._bakeryName;
    }
    set bakeryName(name) {
        return this._bakeryName = name;
    }
}