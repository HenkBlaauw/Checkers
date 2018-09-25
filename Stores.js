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

}
module.exports = Stores;


