var hardcodestores = [{
    name: "Checkers Durbanville",
    managerName: "Hannelet Cloete",
    telno: "09704",
    addressStreet: "13 Wellington Road",
    addressSuburb: "Durbanville",
    addressCity: "Cape Town",
    addressNum: "7550"

},
{
    name: "Checkers Kloof Street",
    managerName: "Hugo Du Pleez",
    telno: "0214805680",
    addressStreet: "Cnr Kloof and Welterveden Street",
    addressSuburb: "Tamboerskloof",
    addressCity: "Cape Town",
    addressNum: "8001"

}
]



class Stores {


    initialize(storeName) {
        console.log(storeName);
        this.storeName = storeName;

    }


    /* getHardCode(example) {
        example = String("hardcodestores");
        return example;
    } */

    addStore(store) {
        this.store.push(store);

    }

    getStore() {

        var i = 0;
        for (i = 0; i < hardcodestores.length; i++) {
            console.log("Store's name: " + hardcodestores[i].name);
            console.log("Manager's name: " + hardcodestores[i].managerName);
            console.log("Telephone number: " + hardcodestores[i].telno);
            console.log("Address: " + hardcodestores[i].addressStreet + " ," + hardcodestores[i].addressSuburb + ", " + hardcodestores[i].addressCity + ", " + hardcodestores[i].addressNum);
            console.log("***************************************************************************");
        }
       



        return this.store;
    }

}
module.exports = Stores;
