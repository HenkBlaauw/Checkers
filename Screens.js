module.exports = {
    displayMenuForScreen(screen) {
        //Main Menu
        if (screen == 0) {
            console.log("Hi,Would you like too...\n1. Add a store.\n2. Edit a store's detail.\n3. Show all Stores added.\n4. Exit! ");
        }
        //Add a store
        else if (screen == 1) {
            console.log("Pleaser enter the store's name");
        }
        //Edit a store
        else if (screen == 2) {
            console.log("Which store's details would you like to edit?");
        }
        else if (screen == 3) {
            console.log("Please enter the store's adress");
        }
        else if (screen == 4) {
            console.log("Please enter the store's address");
        }
        else if (screen == 5) {
            console.log("Please enter the store's manager's name");
        }
        else if (screen == 6) {
            console.log("Please enter the store's telephone number");
        }
        else if (screen == 7) {
            console.log("Would you like to Edit...\n1. Store's name\n2. Store's address\n3. Store's manager's name\n4. Store's telephone number\n5. Return to Main Menu");
        }
        else if (screen == 8) {
            console.log("Change the name of the store");
        }
        else if (screen == 9) {
            console.log("\nWhich part of the address would you like to edit...\n1. Street\n2. Suburb\n3. City\n4. Code\n5. Go Back");
        }
        else if (screen == 10) {
            console.log("Change the manager name of the store");
        }
        else if (screen == 11) {
            console.log("Change the telephone number of the store");
        }
        else if (screen == 12) {
            console.log("Change the street name of store");
        }
        else if (screen == 13) {
            console.log("Change the suburb name of the store");
        }
        else if (screen == 14) {
            console.log("Change the city name of the store");
        }
        else if (screen == 15) {
            console.log("Change the postal code of the store")
        }
    }
}