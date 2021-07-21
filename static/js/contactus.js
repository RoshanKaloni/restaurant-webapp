window.onload = function() {
    call_map();
};

function call_map() {
    const apiKey = 'R8ggwE63RCycpUUeC5M5yPWiXGXJBGNc';
    const centerCoords = [72.823679, 19.121314];
    let map = tt.map({
        "key": apiKey,
        "container": 'map',
        "center": centerCoords,
        "style": 'tomtom://vector/1/basic-main',
        "zoom": 13.5
    });
    tt.setProductInfo('Your TomTom Map Application', '1.00');
    map.addControl(new tt.NavigationControl(), 'top-left');
    let marker = new tt.Marker().setLngLat(centerCoords).addTo(map);
    let popupOffsets = {
        top: [0, 0],
        bottom: [0, -70],
        'bottom-right': [0, -70],
        'bottom-left': [0, -70],
        left: [25, -35],
        right: [-25, -35]
    };
    let popup = new tt.Popup({offset: popupOffsets}).setHTML("<b>Restaurant</b>");
    marker.setPopup(popup).togglePopup();
}