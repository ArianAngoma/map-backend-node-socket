class MarkersList {
    constructor() {
        this.markers = {};
    }

    addMarker(marker) {
        this.markers[marker.id] = marker;
        return marker;
    }

    removeMarker(idMarker) {
        delete this.markers[idMarker];
    }

    updateMarker(marker) {
        this.markers[marker.id] = marker;
    }
}

module.exports = MarkersList;