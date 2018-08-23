class State {

    initialize(screen) {
        this.currentScreen = screen;
<<<<<<< HEAD

=======
        this.storear = [];
>>>>>>> development
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }

<<<<<<< HEAD
    addStore() {
        return;
    }

    getStore() {
        return this.store;
    }

    getData() {




=======
    addStore(presentStore){
        return this.storear.push(presentStore);
    }

    getStore() {
        return this.storear;
>>>>>>> development
    }
}
module.exports = State;