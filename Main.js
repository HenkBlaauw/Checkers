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
    edit_store_main: 7
}



var state = new State();
state.initialize(Screens.main_menu);
console.log('\x1b[36m%s\x1b[0m', "***********************************\nWelcome to the Checkers App\n***********************************", "\x1b[37m")
screen.displayMenuForScreen(state.getCurrentScreen());

stdin.addListener("data", function (a) {
    if (isNaN(a) || a > 4) {
        console.log("Please enter a number that is in the menu!");
    }

    if (state.getCurrentScreen() == Screens.main_menu) {

        if (a == 1 || a == '1') {
            console.log("here i am");

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




        console.log("***********************************\nWelcome to the checkers application\n***********************************")
        screen.displayMenuForScreen(state.getCurrentScreen());

        if (state.getCurrentScreen() == Screens.main_menu) {

            if (isNaN(a) || a > 4) {
                console.log("Please enter a number that is in the menu!");
            }

            if (a == 1 || a == '1') {


                state.setCurrentScreen(Screens.add_store);

            }

            else if (a == 2 || a == '2') {
                state.setCurrentScreen(Screens.edit_store);

            }

            else if (a == 3 || a == '3') {
                console.log("\n\nCurrent added stores:\n");
                for (i = 0; i < state.getStore().length; i++) {
                    var presentStore = state.getStore()[i];
                    var storeNamep = presentStore.storeName;
                    //state.addStore(presentStore);
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
            console.log("This is the edit store screen");
            state.setCurrentScreen(Screens.main_menu);
        }

        else if (state.getCurrentScreen() == Screen.add_store_adress) {


        }

        screen.displayMenuForScreen(state.getCurrentScreen());
    }
});