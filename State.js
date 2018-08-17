class State{
    
    initialize(screen) {
        this.currentScreen = screen;
        
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
        return this.store;
    }




}
module.exports = State;