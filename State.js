class State{
    
    initialize(screen) {
        this.currentScreen = screen;
        this.storear = [];
    }

    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }

    getCurrentScreen() {
        return this.currentScreen;
    }

    addStore(presentStore){
        return this.storear.push(presentStore);
    }

    getStore() {
        return this.storear;
    }
}

module.exports = State;