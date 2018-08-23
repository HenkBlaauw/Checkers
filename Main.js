var screen = require('./Screens.js');
var State = require('./State.js');
var stdin = process.openStdin();
var Stores = require('./Stores.js');


var Screens = {
    main_menu: 0,
    add_store: 1,
    edit_store: 2,
    add_store_name: 3,
    add_store_address: 4,
    add_store_ManName: 5,
    add_store_telno: 6,
    edit_store_main: 7,
    edit_store_name: 8,
    edit_store_address: 9,
    edit_store_manname: 10,
    edit_store_telno: 11

}

var store1 = new Stores();
store1.initialize("Checkers Durbanville");
store1.addManager("Hannelet Cloete");
store1.addStreet("13 Wellington Road");
store1.addSuburb("Durbanville");
store1.addCity("Cape Town");
store1.addRegionCode("7550");
store1.addAddress(store1.street + ", " + store1.suburb + ', ' + store1.city + ', ' + store1.code);
console.log(store1.storeName);
console.log(store1.manager);
console.log(store1);


var store2 = new Stores();
store2.initialize("Checkers Kloof Street");
store2.addManager("Hugo Du Preez");
store2.addStreet("Cnr Kloof and Weltevreden Street");
store2.addSuburb("Tamboerskloof");
store2.addCity("Cape Town");
store2.addRegionCode("8001");
store2.addAddress(store2.street + ", " + store2.suburb + ', ' + store2.city + ', ' + store2.code);
console.log(store2.storeName);
console.log(store2.manager);
console.log(store2);

var state = new State();
state.initialize(Screens.main_menu);
state.storear.push(store1);
state.storear.push(store2);
console.log(state.storear);


console.log("***********************************\nWelcome to the checkers application\n***********************************")
screen.displayMenuForScreen(state.getCurrentScreen());

stdin.addListener("data", function (a) {

    if (state.getCurrentScreen() == Screens.main_menu) {

        if (isNaN(a) || a > 4) {
            console.log("Please enter a number that is in the menu!");
        }

        if (a == 1 || a == '1') {


            state.setCurrentScreen(Screens.add_store);

        }

        else if (a == 2 || a == '2') {
            for (i = 0; i < state.getStore().length; i++) {
                var populatedstores = state.getStore()[i];
                var storeTitle = populatedstores.storeName;
                console.log(i + ". " + storeTitle);
            }
            state.setCurrentScreen(Screens.edit_store);
        }

        else if (a == 3 || a == '3') {
            console.log("\n\nCurrent added stores:\n");
            for (i = 0; i < state.getStore().length; i++) {
                var presentStore = state.getStore()[i];
                var storeNamep = presentStore.storeName;
                console.log(storeNamep);
            }
            console.log("\n\n");

        }
        else if (a == 4 || a == '4') {
            console.log("Buenos Noches!");
            process.exit(0);
        }
        else {
            console.log("Please choose an option from the menu");

            console.log("\n");
        }
    }

    else if (state.getCurrentScreen() == Screens.add_store) {

        console.log("Adding store with name " + a.toString().trim());
        newStore = new Stores();
        newStore.initialize(a.toString().trim());
        state.addStore(newStore);
        state.setCurrentScreen(Screens.add_store_address);
    }

    else if (state.getCurrentScreen() == Screens.edit_store) {

        if (isNaN(a)) {
            console.log("Please enter a number");
        }
        else if (a.toString().trim() < 0 || a.toString().trim() > state.getStore().length) {
            console.log("The number you have entered is not a present store");
            state.setCurrentScreen(Screens.edit_store);
        }
        var StoreNumber = parseInt(a);
        stores = state.getStore()[StoreNumber].storeName
        console.log(state.getStore()[StoreNumber].storeName);
        state.setCurrentScreen(Screens.edit_store_main);

    }

    else if (state.getCurrentScreen() == Screens.edit_store_main) {
        if (isNaN(a.toString().trim())) {
            console.log("Please enter a number");
           
        }

        if (a == 1 || a == '1') { 
            console.log(store1);
            // var varString = "";
            //state.setCurrentScreen(Screens.edit_store_name);
            //if (varString == 'EXIT' || varString == 'exit') {
            //  state.setCurrentScreen(Screens.edit_store_main);
            // var newValue = Stores.storeName;
            //eval(varString + " = " + "'" + newValue + "'");
            // }
            // }
        }

        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.edit_store_address);
        }

        else if (a == 3 || a == '3') {
            state.setCurrentScreen(Screens.edit_store_manname)
        }

        else if (a == 4 || a == '4') {
            state.setCurrentScreen(Screens.edit_store_telno)
        }
        else if (a == 5 || a == '5') {
            state.setCurrentScreen(Screens.main_menu)
        }
    }
    screen.displayMenuForScreen(state.getCurrentScreen());
});