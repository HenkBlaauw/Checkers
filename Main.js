var screen =   require('./Screens.js');
var State = require('./State.js');
var stdin = process.openStdin();
var Stores = require('./Stores.js');

var Screens = {
main_menu : 0,
add_store : 1,
edit_store : 2,
add_store_name : 3,
add_store_address : 4,
add_store_ManName : 5,
add_store_telno : 6
}


var stores = new Stores();

var state = new State();
state.initialize(Screens.main_menu);
console.log("***********************************\nWelcome to the checkers application\n***********************************")
screen.displayMenuForScreen(state.getCurrentScreen());

stdin.addListener("data", function(a){
    

    if(state.getCurrentScreen() == Screens.main_menu){

        if(isNaN(a) || a>4){
            console.log("Please enter a number that is in the menu!");
        }

        if(a == 1 || a == '1'){
           
            state.setCurrentScreen(Screens.add_store);

        }

        else if(a == 2 || a == '2') {
           
            state.setCurrentScreen(Screens.edit_store);

        }

        else if(a == 3 || a == '3') {
            console.log("\n\nCurrent added stores:\n");

            /* for(var i = 0; i < state.getStore().length; i++) {
                var currentStore = state.getStore()[i];
                var StoreName = currentStore.name;
                console.log(StoreName);
            } */
            var show = stores.getStore();
            //console.log(show);
            
        }
        else if(a == 4 || a == '4') {
            console.log("Buenos Noches!");
            process.exit(0);
        }
            else{
                console.log("Please choose an option from the menu");

            console.log("\n\n")
            }
        }

        if(state.getCurrentScreen() == Screens.add_store){
            console.log("this is the add store screen");
            state.setCurrentScreen(Screens.main_menu);
        }

        else if (state.getCurrentScreen() == Screens.edit_store){
            console.log("This is the edit store screen");
            state.setCurrentScreen(Screens.main_menu);
        }



        screen.displayMenuForScreen(state.getCurrentScreen());
    });

