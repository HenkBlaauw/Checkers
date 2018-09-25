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
    edit_store_telno: 11,
    address_street: 12,
    address_suburb: 13,
    address_city: 14,
    address_code: 15
}

//Hard Code
var store1 = new Stores();
store1.initialize("Checkers Durbanville");
store1.addManager("Hannelet Cloete");
store1.addTel("0715674321")
store1.addStreet("13 Wellington Road");
store1.addSuburb("Durbanville");
store1.addCity("Cape Town");
store1.addRegionCode("7550");
store1.addAddress(store1.street + ", " + store1.suburb + ', ' + store1.city + ', ' + store1.code);

//Hard Code
var store2 = new Stores();
store2.initialize("Checkers Kloof Street");
store2.addManager("Hugo Du Preez");
store2.addTel("0761234321");
store2.addStreet("Cnr Kloof and Weltevreden Street");
store2.addSuburb("Tamboerskloof");
store2.addCity("Cape Town");
store2.addRegionCode("8001");
store2.addAddress(store2.street + ", " + store2.suburb + ', ' + store2.city + ', ' + store2.code);

var state = new State();
state.initialize(Screens.main_menu);
state.storear.push(store1);
state.storear.push(store2);

var store = new Stores();

console.log("\n***********************************\nWelcome to the checkers application\n***********************************")
screen.displayMenuForScreen(state.getCurrentScreen());
stdin.addListener("data", function (a) {
    var currentEditStoreNumber = parseInt(a);
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
                var storeNameP = presentStore.storeName;
                console.log(storeNameP);
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

        var currentStores = state.getStore()[currentEditStoreNumber];
        store.initialize(currentStores.storeName);
        store.addManager(currentStores.manager);
        store.addTel(currentStores.telephone);
        store.addStreet(currentStores.street);
        store.addSuburb(currentStores.suburb);
        store.addCity(currentStores.city);
        store.addRegionCode(currentStores.code);
        store.addAddress(currentStores.street + ', ' + currentStores.suburb + ', ' + currentStores.city + ', ' + currentStores.code);

        if (isNaN(a)) {
            console.log("Please enter a number");
        }
        else if (a.toString().trim() < 0 || a.toString().trim() > state.getStore().length) {
            console.log("The number you have entered is not a present store");
            state.setCurrentScreen(Screens.edit_store);
        }
        var stores = state.getStore()[currentEditStoreNumber].storeName;
        console.log(stores);
        state.setCurrentScreen(Screens.edit_store_main);
    }

    else if (state.getCurrentScreen() == Screens.edit_store_main) {
        if (isNaN(a.toString().trim())) {
            console.log("Please enter a number");
        }
        if (a == 1 || a == '1') {
            state.setCurrentScreen(Screens.edit_store_name);
            console.log('\n' + store.storeName);

        }
        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.edit_store_address);
            console.log('\n' + store.address)
        }
        else if (a == 3 || a == '3') {
            state.setCurrentScreen(Screens.edit_store_manname);
            console.log('\n' + store.manager)
        }
        else if (a == 4 || a == '4') {
            state.setCurrentScreen(Screens.edit_store_telno);
            console.log('\n' + store.telephone)
        }
        else if (a == 5 || a == '5') {
            console.log("\nGoing Back.....\n\n");
            state.setCurrentScreen(Screens.main_menu)
        }
    }

    else if (state.getCurrentScreen() == Screens.edit_store_name) {
        var oldName = store.storeName;
        var newName = oldName.replace(oldName, (a.toString().trim()));
        store.storeName = newName;
        console.log("The new name is: " + '\x1b[31m' + store.storeName + '\x1b[0m\n');
        state.setCurrentScreen(Screens.edit_store_main);
    }

    else if (state.getCurrentScreen() == Screens.edit_store_address) {
        if (a == 1 || a == '1') {
            state.setCurrentScreen(Screens.address_street);
            console.log('\n' + store.street);
        }
        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.address_suburb);
            console.log('\n' + store.suburb);
        }
        else if (a == 3 || a == '3') {
            state.setCurrentScreen(Screens.address_city);
            console.log('\n' + store.city);
        }
        else if (a == 4 || a == '4') {
            state.setCurrentScreen(Screens.address_code);
            console.log('\n' + store.code);
        }
        else if (a == 5 || a == '5') {
            console.log("\nGoing Back...")
            state.setCurrentScreen(Screens.edit_store_main);
        }
        else
            console.log("Enter a number from the menu")
    }

    else if (state.getCurrentScreen() == Screens.address_street) {
        var oldStreet = store.street;
        var newStreet = oldStreet.replace(oldStreet, (a.toString().trim()))
        store.street = newStreet;
        console.log("The new street name is:" + '\x1b[31m' + store.street + '\x1b[0m\n');
        state.setCurrentScreen(Screens.edit_store_address);
    }

    else if (state.getCurrentScreen() == Screens.address_suburb) {
        var oldSuburb = store.suburb;
        var newSuburb = oldSuburb.replace(oldSuburb, (a.toString().trim()))
        store.suburb = newSuburb;
        console.log("The new suburb name is:" + '\x1b[31m' + store.suburb + '\x1b[0m\n');
        state.setCurrentScreen(Screens.edit_store_address);
    }

    else if (state.getCurrentScreen() == Screens.address_city) {
        var oldCity = store.city;
        var newCity = oldCity.replace(oldCity, (a.toString().trim()))
        store.city = newCity;
        console.log("The new city name is:" + '\x1b[31m' + store.city + '\x1b[0m\n');
        state.setCurrentScreen(Screens.edit_store_address);
    }

    else if (state.getCurrentScreen() == Screens.address_code) {
        var oldCode = store.manager;
        var newCode = oldCode.replace(oldCode, (a.toString().trim()))
        store.code = newCode;
        state.setCurrentScreen(Screens.edit_store_address);
        
        if (isNaN(a.toString().trim())) {
            console.log("\xb1[31m", "NUMBERS ONLY!!!", "\xb1[31m");
            state.setCurrentScreen(Screens.address_code);
        }
        if (a.toString() > 4) {
            console.log("You did not enter enough digits\n")
            state.setCurrentScreen(Screens.address_code);
        }
        console.log("The new postal code is:" + '\x1b[31m' + store.code + '\x1b[0m\n');
    }

    else if (state.getCurrentScreen() == Screens.edit_store_manname) {
        var oldManName = store.manager;
        var newManName = oldManName.replace(oldManName, (a.toString().trim()))
        store.manager = newManName;
        console.log("The new manager name is:" + '\x1b[31m' + store.manager + '\x1b[0m\n');
        state.setCurrentScreen(Screens.edit_store_main);
    }

    else if (state.getCurrentScreen() == Screens.edit_store_telno) {

        var oldTelNo = store.telephone;
        var newTelno = oldTelNo.replace(oldTelNo, (a.toString().trim()))
        store.telephone = newTelno;
        state.setCurrentScreen(Screens.edit_store_main);

        if (isNaN(a.toString().trim())) {
            console.log("NUMBERS ONLY!!");
            state.setCurrentScreen(Screens.edit_store_telno);
        }

        if (a.toString() > 10) {
            console.log("You did not enter enough digits\n");
            state.setCurrentScreen(Screens.edit_store_telno);
        }
        console.log("The new telephone number is:" + '\x1b[31m' + store.telephone + '\x1b[0m\n');
    }

    screen.displayMenuForScreen(state.getCurrentScreen());
});