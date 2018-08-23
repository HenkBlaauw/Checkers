class State{
    
    initialize(screen) {
        this.currentScreen = screen;
        this.stores = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }

    addStore(){
        this.stores.push(store);
    }

    getStore() {
        return this.store;
    }

          
}

module.exports = State;