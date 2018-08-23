<<<<<<< HEAD



var hardcodestores = [{
    name: "Checkers Durbanville",
    telno: "09704",
    adressStreet: "13 Wellington Road",
    adressSuburb: "Durbanville",
    adressCity: "Cape Town",
    adressNum: "7550"

},
{
    name: "Checkers Kloof Street",
    telno: "0214805680",
    adressStreet: "Cnr Kloof and Welterveden Street",
    adressSuburb: "Tamboerskloof",
    adressCity: "Cape Town",
    adressNum: "8001"

}
]



class Stores {


    initialize(storeName) {
        console.log(storeName);
        this.storeName = storeName;

    }


    getHardCode(example) {
        example = String(hardcodestores);
        return example;
=======
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
>>>>>>> development
    }

    addStore(store) {
        this.store.push(store);
<<<<<<< HEAD

    }

    getStore() {
        return this.store;
    }

}
module.exports = Stores;
=======
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


/* for(i = 0 ; i< state.getStore().length; i++){
    var currentStore = state.getStore()[i];
    console.log(currentStore);
    state.storear.push(store1);
state.storear.push(store2);
} */
>>>>>>> development
