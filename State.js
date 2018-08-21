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

    addStore(){
        return;
    }

    getStore() {
        return this.storear;
    }
}
module.exports = State;