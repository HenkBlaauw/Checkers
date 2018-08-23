module.exports = {
    displayMenuForScreen(screen) {
        //Main Menu
        if (screen == 0) {
            console.log("Hi,Would you like too...\n1. Add a store.\n2. Edit a store's detail.\n3. Show all Stores added.\n4. Exit! ");
        }
        //Add a store
        else if (screen == 1){
            console.log("Pleaser enter the store's name");
        }
        //Edit a store
        else if (screen == 2) {
            console.log("This is the edit store page");
        }
        else if(screen == 3){
            console.log("Please enter the store's adress");
        }
        else if(screen == 4){
            console.log("Please enter the store's street address");
        }
        else if (screen == 5) {
            console.log("Please enter the store's manager's name");
        }
        else if (screen == 6) {
            console.log("Please enter the store's telephone number");
        }
        else if (screen == 7){
            console.log("Please enter the suburb in which the store is located");
        }
        else if (screen == 8){
            console.log("Please enter the city in which the store is located");
        }
        else if (screen == 9){
            console.log("Please enter the region code in which the store is located");
        }
        else if (screen == 10){
            console.log("Press enter to see full address");
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
    add_store_telno: 6,
    adress_road: 7,
    adress_suburb : 8,
    adress_city: 9,
    adress_code: 10
} */