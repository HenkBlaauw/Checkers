class State {

    initialize(screen) {
        this.currentScreen = screen;
        this.storear = [];
        this.trackerArray = [];
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
    getTracker() {
        return this.trackerArray;
    }
}

module.exports = State;