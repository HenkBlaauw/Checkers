module.exports = {
    displayMenuForScreen(screen) {
        //Main Menu
        if(screen == 0) {
            console.log("Hi,Would you like too...\n1. Add a store.\n2. Edit a store's detail.\n3. Show all Stores added.\n4. Exit! ");
        }
        //Add a store
        else if (screen == 1){
            console.log("This is the add a store page");
        }
        //Edit a store
        else if (screen == 2){
            console.log("This is the edit store page");
        }
    }
}