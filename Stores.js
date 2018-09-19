class Stores {

    initialize(storeName) {
        this.storeName = storeName;
    }
    addManager(manager) {
        this.manager = manager;
    }
    addTel(telephone) {
        this.telephone = telephone;
    }
    addAddress(address) {
        this.address = address;
    }

    addStore(store) {
        this.store.push(store);
    }

    addStreet(street) {
        this.street = street;
    }

    addSuburb(suburb) {
        this.suburb = suburb;
    }

    addCity(city) {
        this.city = city;
    }

    addRegionCode(code) {
        this.code = code;
    }

    getName() {
        return this.storeName;
    }
    getManager() {
        return this.manager;
    }
    getTel() {
        return this.telephone;
    }
    getAddress() {
        return this.address;
    }
    getStore() {
        return this.store;
    }
    getStreet() {
        return this.street;
    }
    getSuburb() {
        return this.suburb;
    }
    getCity() {
        return this.city;
    }
    getRegionalCode() {
        return this.code;
    }

}
module.exports = Stores;


