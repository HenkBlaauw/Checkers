module.exports = {
    displayMenuForScreen(screen) {
        //Main Menu
        if(screen == 0) {
            console.log("Hi,Would you like too...\n1. Add a store.\n2. Edit a store's detail.\n3. Show all Stores added.\n4. Exit! ");
        }
        //Add a store
        else if (screen == 1){
            console.log("Pleaser enter the store's name");
        }
        //Edit a store
        else if (screen == 2){
            console.log("This is the edit store page");
        }
        else if(screen == 3){
            console.log("Please enter the store's adress");
        }
        else if(screen == 4){
            console.log("Please enter the store's address");
        }
        else if(screen == 5){
            console.log("Please enter the store's manager's name");
        }
        else if(screen == 6){
            console.log("Please enter the store's telephone number");
        }
    }
}
/* var Screens = {
    main_menu: 0,
    add_store: 1,
    edit_store: 2,
    add_store_name: 3,
    add_store_address: 4,
    add_store_ManName: 5,
    add_store_telno: 6
} */