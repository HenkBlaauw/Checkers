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
    address_code: 15,
    address_add_street: 16,
    address_add_suburb: 17,
    address_add_city: 18,
    address_add_code: 19,
    full_address: 20
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

//Hard Code
var store2 = new Stores();
store2.initialize("Checkers Kloof Street");
store2.addManager("Hugo Du Preez");
store2.addTel("0761234321");
store2.addStreet("Cnr Kloof and Weltevreden Street");
store2.addSuburb("Tamboerskloof");
store2.addCity("Cape Town");
store2.addRegionCode("8001");

var state = new State();
state.initialize(Screens.main_menu);
state.storear.push(store1);
state.storear.push(store2);

var store = new Stores();

console.log("\n***********************************\nWelcome to the checkers application\n***********************************")
screen.displayMenuForScreen(state.getCurrentScreen());
stdin.addListener("data", function (a) {
    var currentEditStoreNumber = parseInt(a);
    var stores = state.getStore()[currentEditStoreNumber];
    var tracker;
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
                var storeNameP = presentStore;
                console.log(storeNameP);
            }
            console.log("\n");

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
        console.log("Adding store with name: " + a.toString().trim(), '\n');
        newStore = new Stores();
        newStore.initialize(a.toString().trim());
        state.addStore(newStore);
        state.setCurrentScreen(Screens.add_store_ManName);
    }

    else if (state.getCurrentScreen() == Screens.add_store_ManName) {
        sManName = a.toString().trim();
        newStore.addManager(sManName);
        console.log("Adding manager name of: " + newStore.manager, '\n');
        state.setCurrentScreen(Screens.add_store_telno);
    }

    else if (state.getCurrentScreen() == Screens.add_store_telno) {
        storeTelNo = a.toString();
        if (a.toString() >= 10) {
            console.log("\nPlease enter the store's address\n");
            state.setCurrentScreen(Screens.address_add_street);
        }
        else {
            console.log("\nPlease enter a number which has 10 numbers in, no more\n");
            state.setCurrentScreen(Screens.add_store_telno);
        }
    }

    else if (state.getCurrentScreen() == Screens.address_add_street) {
        var sAdress = a.toString().trim();
        newStore.addStreet(sAdress);
        console.log("Adding store's street adress: " + sAdress, '\n');
        state.setCurrentScreen(Screens.address_add_suburb);
    }
    else if (state.getCurrentScreen() == Screens.address_add_suburb) {
        sSuburb = a.toString().trim();
        newStore.addSuburb(sSuburb);
        console.log("Adding suburb with name: " + sSuburb, '\n');
        state.setCurrentScreen(Screens.address_add_city);
    }

    else if (state.getCurrentScreen() == Screens.address_add_city) {
        sCity = a.toString().trim();
        newStore.addCity(sCity);
        console.log("Adding city with name: " + sCity, '\n');
        state.setCurrentScreen(Screens.address_add_code);
    }

    else if (state.getCurrentScreen() == Screens.address_add_code) {
        if (isNaN(a.toString().trim())) {
            state.setCurrentScreen(Screens.address_add_code);
        }
        else {
            sCode = a.toString().trim();
            newStore.addRegionCode(sCode);
            console.log("Adding city code of: " + sCode, '\n');
            state.setCurrentScreen(Screens.full_address);
        }
    }

    else if (state.getCurrentScreen() == Screens.full_address) {
        newStore.address = newStore.street + "\n" + newStore.suburb + "\n" + newStore.city + "\n" + newStore.code;
        console.log("The current address is: \n" + newStore.address, '\n');
        state.setCurrentScreen(Screens.main_menu);
    }

    else if (state.getCurrentScreen() == Screens.edit_store) {
        store.initialize(stores.storeName);
        store.addManager(stores.manager);
        store.addTel(stores.telephone);
        store.addStreet(stores.street);
        store.addSuburb(stores.suburb);
        store.addCity(stores.city);
        store.addRegionCode(stores.code);

        if (!isNaN(a) || !a.toString().trim() < 0 || !a.toString().trim() > state.getStore().length) {
            state.trackerArray.pop(tracker);
            tracker = parseInt(a);
            state.trackerArray.push(tracker);
            console.log(stores.storeName);
            state.setCurrentScreen(Screens.edit_store_main);
        }
    }
    else if (state.getCurrentScreen() == Screens.edit_store_main) {

        if (isNaN(a.toString().trim())) {
            console.log("\nPlease enter a number\n");
        }
        if (a == 1 || a == '1') {
            state.setCurrentScreen(Screens.edit_store_name);
            console.log('\n' + store.storeName);
        }
        else if (a == 2 || a == '2') {
            state.setCurrentScreen(Screens.edit_store_address);
            console.log('\n' + store.street + ', ' + store.suburb + ', ' + store.city + ', ' + store.code)
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
            state.setCurrentScreen(Screens.main_menu);
        }
    }

    else if (state.getCurrentScreen() == Screens.edit_store_name) {
        if (a.toString() == false) {
            console.log("\x1b[31mField Mandatory*\x1b[0m");
            state.setCurrentScreen(Screens.edit_store_name);
        }
        else {
            var oldName = store.storeName;
            var newName = oldName.replace(oldName, (a.toString().trim()));
            store.storeName = newName;
            state.getStore()[state.getTracker()].storeName = store.storeName;
            console.log("The new name is: " + '\x1b[31m' + store.storeName + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_main);
        }
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
        if (a.toString() == false) {
            console.log("\x1b[31mField Mandatory*\x1b[0m");
            state.setCurrentScreen(Screens.address_street);
        }
        else {
            var oldStreet = store.street;
            var newStreet = oldStreet.replace(oldStreet, (a.toString().trim()))
            store.street = newStreet;
            state.getStore()[state.getTracker()].street = store.street;
            console.log("The new street name is:" + '\x1b[31m' + store.street + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_address);
        }
    }

    else if (state.getCurrentScreen() == Screens.address_suburb) {
        if (a.toString() == false) {
            console.log("\x1b[31mField Mandatory*\x1b[0m");
            state.setCurrentScreen(Screens.address_suburb);
        }
        else {
            var oldSuburb = store.suburb;
            var newSuburb = oldSuburb.replace(oldSuburb, (a.toString().trim()))
            store.suburb = newSuburb;
            state.getStore()[state.getTracker()].suburb = store.suburb;
            console.log("The new suburb name is:" + '\x1b[31m' + store.suburb + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_address);
        }
    }
    else if (state.getCurrentScreen() == Screens.address_city) {
        if (a.toString() == false) {
            console.log("\x1b[31mField Mandatory*\x1b[0m");
            state.setCurrentScreen(Screens.address_city);
        }
        else {
            var oldCity = store.city;
            var newCity = oldCity.replace(oldCity, (a.toString().trim()))
            store.city = newCity;
            state.getStore()[state.getTracker()].city = store.city;
            console.log("The new city name is:" + '\x1b[31m' + store.city + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_address);
        }
    }
    else if (state.getCurrentScreen() == Screens.address_code) {
        if (a.toString() == false || isNaN(a.toString().trim()) || a.toString() <= 4) {
            console.log("\n\x1b[31mRequirements not met\x1b[0m\n");
            state.setCurrentScreen(Screens.address_code);
        }
        else {
            var oldCode = store.manager;
            var newCode = oldCode.replace(oldCode, (a.toString().trim()))
            store.code = newCode;
            state.getStore()[state.getTracker()].code = store.code;
            console.log("The new postal code is:" + '\x1b[31m' + store.code + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_address);
        }
    }

    else if (state.getCurrentScreen() == Screens.edit_store_manname) {
        if (a.toString() == false) {
            console.log("\x1b[31mField Mandatory*\x1b[0m");
            state.setCurrentScreen(Screens.edit_store_manname);
        }
        else {
            console.log(state.trackerArray);
            var oldManName = store.manager;
            var newManName = oldManName.replace(oldManName, (a.toString().trim()))
            store.manager = newManName;
            state.getStore()[state.getTracker()].manager = store.manager;
            console.log("The new manager name is:" + '\x1b[31m' + store.manager + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_main);
        }
    }

    else if (state.getCurrentScreen() == Screens.edit_store_telno) {
        if (a.toString() == false || isNaN(a.toString().trim()) || a.toString() <= 10) {
            console.log("\n\x1b[31mRequirements not met\x1b[0m\n");
            state.setCurrentScreen(Screens.edit_store_telno);
        }
        else {
            var oldTelNo = store.telephone;
            var newTelno = oldTelNo.replace(oldTelNo, (a.toString().trim()))
            store.telephone = newTelno;
            state.getStore()[state.trackerArray].telephone = store.telephone;
            console.log("The new telephone number is:" + '\x1b[31m' + store.telephone + '\x1b[0m\n');
            state.setCurrentScreen(Screens.edit_store_main);
        }
    }

    screen.displayMenuForScreen(state.getCurrentScreen());
});