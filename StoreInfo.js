Stores = require('./Stores.js');

class StoreInfo {

    initialize(name) {
        this.name = stores.hardcodestores.name;
        this.managers = stores.hardcodestores.managerName;
        this.telephones = stores.hardcodestores.telno;
        this.address = (stores.hardcodestores.addressStreet + stores.hardcodestores.addressSuburb + stores.hardcodestores.addressCity);
    }

    addManager(manager) {
        this.managers.push(manager);
    }
    addTel(telephone) {
        this.telephones.push(telephone);
    }
    addAddress(address) {
        this.address.push(address);
    }

}
module.exports= StoreInfo;