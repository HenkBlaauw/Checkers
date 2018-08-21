


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
    }

    addStore(store) {
        this.store.push(store);

    }

    getStore() {
        return this.store;
    }

}
module.exports = Stores;