Stores = require('./Stores.js');


stores = new Stores();



class StoreInfo {

    initialize(name){
this.name= stores.hardcodestores.name;
this.manager = stores.hardcodestores.managerName;
this.telephone = stores.hardcodestores.telno;
this.address = (stores.hardcodestores.addressStreet + stores.hardcodestores.addressSuburb + stores.hardcodestores.addressCity);



    }




}